import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from 'styled-components';
import { HomePodcast, Navbar } from '../components';

const Main = styled.main`
  padding: 0.25rem 1rem;
`;

const PodcastsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Home = () => {
  const { isLoading, homePageDisplayedPodcasts } = useSelector(
    (state) => state.podcastsReducer
  );
  return (
    <>
      <Navbar />
      <Main>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <PodcastsContainer>
            {homePageDisplayedPodcasts.map((item, index) => {
              const { description, image, id, title, genres } = item;

              return <HomePodcast key={id} item={item} />;
            })}
          </PodcastsContainer>
        )}
      </Main>
    </>
  );
};

export default Home;
