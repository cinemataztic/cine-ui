import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel.component';
import PosterCard from './PosterCard.component';

// jsdom defaults window.innerWidth to 0; set to 1200 so slidesPerView = 4
beforeAll(() => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1200,
  });
});

const makeMovies = (n) =>
  Array.from({ length: n }, (_, i) => ({
    id: String(i + 1),
    title: `Movie ${i + 1}`,
    distributor: `Distributor ${i + 1}`,
    screens: 100 + i * 10,
  }));

const noopToggle = jest.fn();

const renderCarousel = ({ items, selectedMovies = [], ...rest } = {}) => {
  const movies = items ?? makeMovies(6);
  const selectedSet = new Set(selectedMovies);
  return render(
    <Carousel
      label='Now Showing'
      items={movies}
      renderItem={(movie) => (
        <PosterCard
          movie={movie}
          isSelected={selectedSet.has(movie.id)}
          onToggle={noopToggle}
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
    expect(dots[0]).toHaveStyle({ backgroundColor: 'var(--carousel-accent, #3dd6c8)' });
    expect(dots[1]).toHaveStyle({ backgroundColor: '#555' });

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    dots = screen.getAllByTestId('pill-dot');
    expect(dots[0]).toHaveStyle({ backgroundColor: '#555' });
    expect(dots[1]).toHaveStyle({ backgroundColor: 'var(--carousel-accent, #3dd6c8)' });
  });
});
