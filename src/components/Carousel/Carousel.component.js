import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import PosterCard from './PosterCard.component';

const GAP = 12;
const PEEK = 0.4;

function useSlidesPerView() {
  const [spv, setSpv] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setSpv(1);
      else if (w < 768) setSpv(2);
      else if (w < 1100) setSpv(3);
      else setSpv(4);
    };
    update();

    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(update, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return spv;
}

function ChevronLeft({size}) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <path d='M15 18l-6-6 6-6' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

function ChevronRight({size}) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <path d='M9 18l6-6-6-6' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

function PillDots({ current, maxIndex }) {
  const count = maxIndex + 1;
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          data-testid='pill-dot'
          style={{
            display: 'inline-block',
            height: 4,
            width: 22,
            borderRadius: 999,
            backgroundColor: i === current ? 'var(--carousel-accent, #3dd6c8)' : '#555',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </div>
  );
}

function PeekArrow({ onClick, direction }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type='button'
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={direction === 'right' ? 'Next' : 'Previous'}
      style={{
        position: 'absolute',
        top: '38%',
        transform: `translateY(-50%) scale(${hovered ? 1.05 : 1})`,
        ...(direction === 'right' ? { right: 0 } : { left: 0 }),
        zIndex: 20,
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: 'none',
        background: hovered ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)',
        color: 'var(--carousel-accent, #3AC1C8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: hovered ? '0 0 12px rgba(0,0,0,0.6)' : '0 2px 8px rgba(0,0,0,0.4)',
        transition: 'all 0.2s ease',
        outline: 'none',
        padding: 0,
      }}
    >
      {direction === 'right' ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
    </button>
  );
}

const Carousel = ({ label, movies, selectedMovies, onToggle }) => {
  const slidesPerView = useSlidesPerView();
  const total = movies.length;
  const maxIndex = Math.max(0, total - slidesPerView);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = React.useCallback(() => setCurrentIndex((i) => Math.max(0, i - 1)), []);
  const next = React.useCallback(() => setCurrentIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const selectedSet = useMemo(() => new Set(selectedMovies), [selectedMovies]);

  const cardWCss = `calc((100% - ${GAP * slidesPerView}px) / ${slidesPerView + PEEK})`;
  const translateCss = `calc(-${currentIndex} * (${cardWCss} + ${GAP}px))`;

  return (
    <div className='mb-6' style={{ overflow: 'hidden' }}>
      <div className='flex items-center justify-between mb-3'>
        <p className='text-lg font-semibold' style={{ color: 'var(--carousel-label-color, #525252)' }}>
          {label}
        </p>
        <PillDots current={currentIndex} maxIndex={maxIndex} />
      </div>

      <div style={{ position: 'relative' }}>
        {canGoPrev && <PeekArrow direction='left' onClick={prev} />}

        <div style={{ overflow: 'hidden', width: '100%', borderRadius: 4 }}>
          <div
            style={{
              display: 'flex',
              gap: GAP,
              transition: 'transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: `translateX(${translateCss})`,
            }}
          >
            {movies.map((movie) => (
              <PosterCard
                key={movie.id}
                movie={movie}
                isSelected={selectedSet.has(movie.id)}
                onToggle={onToggle}
                style={{ width: cardWCss, flexShrink: 0 }}
              />
            ))}
          </div>
        </div>

        {canGoNext && <PeekArrow direction='right' onClick={next} />}
      </div>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  label: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      distributor: PropTypes.string,
      screens: PropTypes.number,
      posterUrl: PropTypes.string,
    }),
  ).isRequired,
  selectedMovies: PropTypes.arrayOf(PropTypes.string),
  onToggle: PropTypes.func.isRequired,
};
