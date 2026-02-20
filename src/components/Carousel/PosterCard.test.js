import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PosterCard from './PosterCard.component';

const baseMovie = { id: '42', title: 'Test Movie', distributor: 'Test Dist', screens: 200 };
const baseProps = { movie: baseMovie, isSelected: false, onToggle: jest.fn(), style: {} };

describe('PosterCard — poster', () => {
  it('renders an img when posterUrl is provided', () => {
    render(<PosterCard {...baseProps} movie={{ ...baseMovie, posterUrl: 'https://placehold.co/200x300' }} />);
    expect(screen.getByRole('img', { name: 'Test Movie' })).toBeInTheDocument();
  });

  it('does not render a poster img when posterUrl is absent', () => {
    render(<PosterCard {...baseProps} />);
    expect(screen.queryByRole('img', { name: 'Test Movie' })).not.toBeInTheDocument();
  });
});

describe('PosterCard — selection', () => {
  it('renders a checked checkbox when isSelected is true', () => {
    render(<PosterCard {...baseProps} isSelected={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders an unchecked checkbox when isSelected is false', () => {
    render(<PosterCard {...baseProps} isSelected={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('calls onToggle(id, true) when the checkbox is checked', () => {
    const onToggle = jest.fn();
    render(<PosterCard {...baseProps} isSelected={false} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith('42', true);
  });

  it('calls onToggle(id, false) when the checkbox is unchecked', () => {
    const onToggle = jest.fn();
    render(<PosterCard {...baseProps} isSelected={true} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith('42', false);
  });
});
