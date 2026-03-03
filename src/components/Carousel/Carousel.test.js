import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel.component';
import PosterCard from './PosterCard.component';
import Checkbox from '../Checkbox/Checkbox.component';

const mockScrollState = { snapIndex: 0, maxIndex: 2, selectCb: null };

function resetMockScroll(maxIndex = 2) {
  mockScrollState.snapIndex = 0;
  mockScrollState.maxIndex = maxIndex;
  mockScrollState.selectCb = null;
}

jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: () => [
    jest.fn(),
    {
      selectedScrollSnap: () => mockScrollState.snapIndex,
      canScrollPrev: () => mockScrollState.snapIndex > 0,
      canScrollNext: () => mockScrollState.snapIndex < mockScrollState.maxIndex,
      scrollTo: (i) => {
        mockScrollState.snapIndex = i;
        mockScrollState.selectCb?.();
      },
      on: (e, cb) => { if (e === 'select') mockScrollState.selectCb = cb; },
      off: (e, _cb) => { if (e === 'select') mockScrollState.selectCb = null; },
    },
  ],
}));


// jsdom defaults window.innerWidth to 0; set to 1200 so slidesPerView = 4
beforeAll(() => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1200,
  });
});

beforeEach(() => resetMockScroll(2)); // default: 6 items − 4 spv = maxIndex 2

const makeMovies = (n) =>
  Array.from({ length: n }, (_, i) => ({
    id: String(i + 1),
    title: `Movie ${i + 1}`,
    distributor: `Distributor ${i + 1}`,
    screens: 100 + i * 10,
  }));

const renderCarousel = ({ items, selectedMovies = [], ...rest } = {}) => {
  const movies = items ?? makeMovies(6);
  const selectedSet = new Set(selectedMovies);
  const noopToggle = jest.fn();
  return render(
    <Carousel
      label='Now Showing'
      items={movies}
      renderItem={(movie) => (
        <PosterCard
          movie={movie}
          renderActions={() => (
            <Checkbox
              checked={selectedSet.has(movie.id)}
              onChange={(e) => noopToggle(movie.id, e.target.checked)}
            />
          )}
        />
      )}
      {...rest}
    />,
  );
};

describe('Carousel — rendering', () => {
  it('renders the label', () => {
    renderCarousel();
    expect(screen.getByText('Now Showing')).toBeInTheDocument();
  });

  it('renders one card per item', () => {
    renderCarousel();
    expect(screen.getAllByRole('checkbox')).toHaveLength(6);
  });

  it('marks only selected items as checked', () => {
    renderCarousel({ selectedMovies: ['2', '4'] });
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
    expect(checkboxes[3]).toBeChecked();
    expect(checkboxes[4]).not.toBeChecked();
    expect(checkboxes[5]).not.toBeChecked();
  });
});

describe('Carousel — navigation', () => {
  it('shows Next but not Prev on first render', () => {
    renderCarousel();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument();
  });

  it('shows Prev after clicking Next', () => {
    renderCarousel();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
  });

  it('hides Prev when navigating back to the start', () => {
    renderCarousel();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument();
  });

  it('hides Next at the last slide', () => {
    // 6 movies, slidesPerView=4 → maxIndex=2, one page jump reaches the end
    renderCarousel();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
  });
});

describe('Carousel — pill dots', () => {
  it('renders one dot per page (Math.ceil(total / slidesPerView))', () => {
    // 6 movies, slidesPerView=4 → Math.ceil(6/4) = 2 dots
    renderCarousel();
    expect(screen.getAllByTestId('pill-dot')).toHaveLength(2);
  });

  it('highlights the dot at the active page', () => {
    renderCarousel();
    let dots = screen.getAllByTestId('pill-dot');
    expect(dots[0]).toHaveClass('opacity-100');
    expect(dots[1]).toHaveClass('opacity-30');

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    dots = screen.getAllByTestId('pill-dot');
    expect(dots[0]).toHaveClass('opacity-30');
    expect(dots[1]).toHaveClass('opacity-100');
  });
});

describe('Carousel — infinite scroll', () => {
  // 8 items, slidesPerView=4 → maxIndex=4, pages=[0,4]
  beforeEach(() => resetMockScroll(4)); // 8 items − 4 spv = maxIndex 4

  const renderInfinite = (overrides = {}) => {
    const onLoadMore = jest.fn();
    const utils = renderCarousel({
      items: makeMovies(8),
      onLoadMore,
      total: 9,   // 8 loaded < 9 total → hasMore=true
      loading: false,
      ...overrides,
    });
    return { ...utils, onLoadMore };
  };

  it('calls onLoadMore with current item count (offset) when navigating into the prefetch zone', () => {
    const { onLoadMore } = renderInfinite();
    // index 0 → newIndex 4; 4+4=8 >= items.length(8) → prefetch fires with offset=8
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(onLoadMore).toHaveBeenCalledWith(8);
  });

  it('shows pill dots based on total, not items.length', () => {
    // 8 items loaded, total=9 → ceil(9/4)=3 dots (not ceil(8/4)=2)
    renderInfinite();
    expect(screen.getAllByTestId('pill-dot')).toHaveLength(3);
  });

  it('does NOT call onLoadMore when well within the middle of a larger list', () => {
    // 20 items → maxIndex=16; from index 0, newIndex=4; 4+4=8 < 20 → no prefetch
    resetMockScroll(16);
    const { onLoadMore } = renderInfinite({ items: makeMovies(20) });
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(onLoadMore).not.toHaveBeenCalled();
  });

  it('does NOT call onLoadMore when loading is true', () => {
    const { onLoadMore } = renderInfinite({ loading: true });
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(onLoadMore).not.toHaveBeenCalled();
  });

  it('does NOT call onLoadMore when all items are already loaded (total === items.length)', () => {
    const { onLoadMore } = renderInfinite({ total: 8 }); // 8 loaded = 8 total → hasMore=false
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(onLoadMore).not.toHaveBeenCalled();
  });

  it('shows loading spinner when loading is true', () => {
    renderInfinite({ loading: true });

    expect(document.querySelector('.animate-spin')).toBeInTheDocument();
  });

  it('does not show loading spinner when loading is false', () => {
    renderInfinite({ loading: false });
    expect(document.querySelector('.animate-spin')).not.toBeInTheDocument();
  });
});
