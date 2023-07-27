import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { HomePodcast } from '../components';
import { Buttons } from '../components/UI';

const Main = styled.main`
  display: flex;
`;

const Aside = styled.aside`
  flex-grow: 5;
`;
const MainRight = styled.section`
  flex-grow: 2;
  border: 1px solid red;
`;
const PodcastsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const LogInButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const SpecificGenre = styled.div`
  background-color: orange;
`;
const Home = () => {
  const { allPodcasts, isLoading } = useSelector(
    (state) => state.podcastsReducer
  );

  return (
    <Main>
      <Aside>
        <div>
          <p>Home</p>
          <p>Search</p>
        </div>
      </Aside>
      <MainRight>
        <LogInButtons>
          <Link to="/signup">
            <Buttons $backgroundColor={'red'}>Signup</Buttons>
          </Link>
          <Link to="/signup">
            <Buttons $backgroundColor={'red'}>Login</Buttons>
          </Link>
        </LogInButtons>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <PodcastsContainer>
            {allPodcasts.map((item, index) => {
              const { description, image, id, title, genres } = item;

              return <HomePodcast key={id} item={item} />;
            })}
          </PodcastsContainer>
        )}
      </MainRight>
    </Main>
  );
};

export default Home;
