import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PosterCard = ({ movie, renderActions }) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: '100%',
        aspectRatio: '2 / 3',
        borderRadius: 6,
        overflow: 'hidden',
        background: 'var(--movie-card-bg, #444)',
        flexShrink: 0,
      }}>
        {movie.posterUrl && !imgError ? (
          <img
            src={movie.posterUrl}
            alt={movie.title}
            draggable={false}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.35s ease',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'var(--movie-card-bg, #444)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <svg width='48' height='48' viewBox='0 0 24 24' fill='none' style={{ opacity: 0.35, color: 'var(--carousel-accent, #3dd6c8)' }}>
              <rect x='2' y='4' width='20' height='16' rx='2' stroke='currentColor' strokeWidth='1.5' />
              <path d='M2 8h20M2 16h20M7 4v4M7 16v4M12 4v16M17 4v4M17 16v4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
            </svg>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textAlign: 'center', padding: '0 8px', lineHeight: 1.3 }}>{movie.title}</span>
          </div>
        )}
      </div>

      <div className='mt-2 text-center'>
        <p className='text-lg font-semibold text-white truncate'>{movie.title}</p>
        <p className='text-sm font-normal mt-0.5' style={{ color: 'var(--movie-card-meta-color, #7D7D7D)' }}>{movie.distributor}</p>
        {!!movie.screens && <p className='text-sm font-normal' style={{ color: 'var(--movie-card-meta-color, #7D7D7D)' }}>{movie.screens} {movie.screens === 1 ? 'Screen' : 'Screens'}</p>}
        {renderActions && (
          <div className='flex justify-center mt-2'>
            {renderActions()}
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterCard;

PosterCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    distributor: PropTypes.string,
    screens: PropTypes.number,
    posterUrl: PropTypes.string,
  }).isRequired,
  renderActions: PropTypes.func,
};
