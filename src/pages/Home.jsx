import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { HomePodcast } from '../components';
const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: red;
`;
const PodcastsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Home = () => {
  const { allPodcasts } = useSelector((state) => state.podcastsReducer);
  return (
    <>
      <Title>Home</Title>
      <PodcastsContainer>
        {allPodcasts.map((item, index) => {
          const { description, image, id, title } = item;
          return <HomePodcast key={id} item={item} />;
        })}
      </PodcastsContainer>
      <Link to="/signup">To signup page</Link>
    </>
  );
};

export default Home;
