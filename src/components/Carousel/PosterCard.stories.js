import { useState } from 'react';
import PosterCard from './PosterCard.component';

export default {
  title: 'Components/PosterCard',
  component: PosterCard,
};

const SAMPLE_MOVIE = {
  id: '1',
  title: 'Movie Title',
  distributor: 'Distributor',
  screens: 250,
  posterUrl: 'https://placehold.co/200x300/333/aaa?text=Poster',
};

const Wrapper = ({ children }) => (
  <div style={{ padding: 24, background: '#1a1a1a', width: 300 }}>
    {children}
  </div>
);

const Template = ({ movie }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Wrapper>
      <PosterCard
        movie={movie}
        isSelected={isSelected}
        onToggle={(_, checked) => setIsSelected(checked)}
      />
    </Wrapper>
  );
};

export const WithPoster = Template.bind({});
WithPoster.args = {
  movie: SAMPLE_MOVIE,
};

