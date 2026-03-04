import { useState, useEffect } from 'react';
import Carousel from './Carousel.component';
import PosterCard from './PosterCard.component';
import Checkbox from '../Checkbox/Checkbox.component';

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

const Template = ({ label, items }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleToggle = (id, checked) => {
    setSelectedMovies((prev) =>
      checked ? [...prev, id] : prev.filter((m) => m !== id),
    );
  };

  const selectedSet = new Set(selectedMovies);

  return (
    <div style={{ padding: 24, background: '#1a1a1a', minHeight: '100vh' }}>
      <Carousel
        label={label}
        items={items}
        renderItem={(movie) => (
          <PosterCard
            movie={movie}
            renderActions={() => (
              <Checkbox
                checked={selectedSet.has(movie.id)}
                onChange={(e) => handleToggle(movie.id, e.target.checked)}
              />
            )}
          />
        )}
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
  items: SAMPLE_MOVIES,
};

// Simulates: GET /movies?skip=0&limit=10
// Returns:   { items: Movie[], total: number }
const fakeFetchMovies = (skip, limit) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve({ items: SAMPLE_MOVIES.slice(skip, skip + limit), total: SAMPLE_MOVIES.length }),
      800,
    ),
  );

const InfiniteTemplate = ({ label }) => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initial load on mount
  useEffect(() => {
    setLoading(true);
    fakeFetchMovies(0, 10).then(({ items, total: t }) => {
      setMovies(items);
      setTotal(t);
      setLoading(false);
    });
  }, []);

  // Called by Carousel with current items.length as the offset
  const handleLoadMore = (offset) => {
    setLoading(true);
    fakeFetchMovies(offset, 10).then(({ items }) => {
      setMovies((prev) => [...prev, ...items]);
      setLoading(false);
    });
  };

  return (
    <div style={{ padding: 24, background: '#1a1a1a', minHeight: '100vh' }}>
      <Carousel
        label={label}
        items={movies}
        renderItem={(movie) => <PosterCard movie={movie} />}
        onLoadMore={handleLoadMore}
        total={total}
        loading={loading}
      />
    </div>
  );
};

export const Infinite = InfiniteTemplate.bind({});

Infinite.args = {
  label: 'INFINITE',
};
