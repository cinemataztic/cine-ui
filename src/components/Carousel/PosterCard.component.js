import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PosterCard = ({ movie, renderActions }) => {
  const [hovered, setHovered] = useState(false);

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
        {movie.posterUrl ? (
          <img
            src={movie.posterUrl}
            alt={movie.title}
            draggable={false}
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
          <div style={{ width: '100%', height: '100%', background: 'var(--movie-card-bg, #444)' }} />
        )}
      </div>

      <div className='mt-2 text-center'>
        <p className='text-lg font-semibold text-white truncate'>{movie.title}</p>
        <p className='text-sm font-normal mt-0.5' style={{ color: 'var(--movie-card-meta-color, #7D7D7D)' }}>{movie.distributor}</p>
        <p className='text-sm font-normal' style={{ color: 'var(--movie-card-meta-color, #7D7D7D)' }}>{movie.screens} Screens</p>
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
