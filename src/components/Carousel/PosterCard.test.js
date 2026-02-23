import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PosterCard from './PosterCard.component';
import Checkbox from '../Checkbox/Checkbox.component';

const baseMovie = { id: '42', title: 'Test Movie', distributor: 'Test Dist', screens: 200 };

describe('PosterCard — poster', () => {
  it('renders an img when posterUrl is provided', () => {
    render(<PosterCard movie={{ ...baseMovie, posterUrl: 'https://placehold.co/200x300' }} />);
    expect(screen.getByRole('img', { name: 'Test Movie' })).toBeInTheDocument();
  });

  it('does not render a poster img when posterUrl is absent', () => {
    render(<PosterCard movie={baseMovie} />);
    expect(screen.queryByRole('img', { name: 'Test Movie' })).not.toBeInTheDocument();
  });
});

describe('PosterCard — renderActions', () => {
  it('renders nothing in the actions slot when renderActions is not provided', () => {
    render(<PosterCard movie={baseMovie} />);
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });

  it('renders the actions slot when renderActions is provided', () => {
    render(
      <PosterCard
        movie={baseMovie}
        renderActions={() => <Checkbox checked={false} onChange={() => {}} />}
      />,
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('calls the action handler when the rendered action is triggered', () => {
    const onChange = jest.fn();
    render(
      <PosterCard
        movie={baseMovie}
        renderActions={() => <Checkbox checked={false} onChange={onChange} />}
      />,
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalled();
  });
});
