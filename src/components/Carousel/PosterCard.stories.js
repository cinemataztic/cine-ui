import { useState } from 'react';
import PosterCard from './PosterCard.component';
import Checkbox from '../Checkbox/Checkbox.component';

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
        renderActions={() => (
          <Checkbox
            checked={isSelected}
            onChange={(e) => setIsSelected(e.target.checked)}
          />
        )}
      />
    </Wrapper>
  );
};

const TemplateNoActions = ({ movie }) => (
  <Wrapper>
    <PosterCard movie={movie} />
  </Wrapper>
);

export const WithPoster = Template.bind({});
WithPoster.args = { movie: SAMPLE_MOVIE };

export const NoActions = TemplateNoActions.bind({});
NoActions.args = { movie: SAMPLE_MOVIE };
