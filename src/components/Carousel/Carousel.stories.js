import { useState } from 'react';
import Carousel from './Carousel.component';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

const SAMPLE_MOVIES = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  title: `Movie Title ${i + 1}`,
  distributor: `Distributor ${i + 1}`,
  screens: 100 + i * 50,
  posterUrl: `https://placehold.co/200x300/333/aaa?text=Movie+${i + 1}`,
}));

const Template = ({ label, movies }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleToggle = (id, checked) => {
    setSelectedMovies((prev) =>
      checked ? [...prev, id] : prev.filter((m) => m !== id),
    );
  };

  return (
    <div style={{ padding: 24, background: '#1a1a1a', minHeight: '100vh' }}>
      <Carousel
        label={label}
        movies={movies}
        selectedMovies={selectedMovies}
        onToggle={handleToggle}
      />
      {selectedMovies.length > 0 && (
        <p style={{ color: '#aaa', marginTop: 12, fontSize: 13 }}>
          Selected IDs: {selectedMovies.join(', ')}
        </p>
      )}
    </div>
  );
};

export const Base = Template.bind({});

Base.args = {
  label: 'UPCOMING',
  movies: SAMPLE_MOVIES,
};
