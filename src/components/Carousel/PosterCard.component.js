import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox.component';

const PosterCard = ({ movie, isSelected, onToggle, style }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...style,
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
        <div className='flex justify-center mt-2'>
          <Checkbox
            checked={isSelected}
            onChange={(e) => onToggle(movie.id, e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
