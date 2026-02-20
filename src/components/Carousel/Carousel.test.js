import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel.component';

// default window.innerWidth set to 0, set to 1200 to get slidesPerView = 4
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

const defaultProps = {
  label: 'Now Showing',
  movies: makeMovies(6), // slidesPerView=4 → maxIndex=2, numPages=2
  selectedMovies: [],
  onToggle: jest.fn(),
};

describe('Carousel — rendering', () => {
  it('renders the label', () => {
    render(<Carousel {...defaultProps} />);
    expect(screen.getByText('Now Showing')).toBeInTheDocument();
  });

  it('renders one card per movie', () => {
    render(<Carousel {...defaultProps} />);
    expect(screen.getAllByRole('checkbox')).toHaveLength(6);
  });

  it('marks only selected movies as checked', () => {
    render(<Carousel {...defaultProps} selectedMovies={['2', '4']} />);
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
    render(<Carousel {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument();
  });

  it('shows Prev after clicking Next', () => {
    render(<Carousel {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
  });

  it('hides Prev when navigating back to the start', () => {
    render(<Carousel {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument();
  });

  it('hides Next at the last slide', () => {
    // 6 movies, slidesPerView=4 → maxIndex=2, one click jumps to index 2 (last page)
    render(<Carousel {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
  });
});

describe('Carousel — pill dots', () => {
  it('renders one dot per page (Math.ceil(total / slidesPerView))', () => {
    // 6 movies, slidesPerView=4 → Math.ceil(6/4) = 2 dots
    render(<Carousel {...defaultProps} />);
    expect(screen.getAllByTestId('pill-dot')).toHaveLength(2);
  });

  it('highlights the dot at the active page', () => {
    render(<Carousel {...defaultProps} />);
    let dots = screen.getAllByTestId('pill-dot');
    expect(dots[0]).toHaveStyle({ backgroundColor: 'var(--carousel-accent, #3dd6c8)' });
    expect(dots[1]).toHaveStyle({ backgroundColor: '#555' });

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    dots = screen.getAllByTestId('pill-dot');
    expect(dots[0]).toHaveStyle({ backgroundColor: '#555' });
    expect(dots[1]).toHaveStyle({ backgroundColor: 'var(--carousel-accent, #3dd6c8)' });
  });
});
