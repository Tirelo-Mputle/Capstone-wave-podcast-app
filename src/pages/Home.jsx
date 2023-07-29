import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { HomePodcast } from '../components';
import { Buttons } from '../components/UI';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from 'react-icons/fc';
import {
  setHomePageDisplayedPodcasts,
  setSorting,
} from '../globalState/reducers/podcastsReducer';
const Main = styled.main`
  display: flex;
`;
const Menu = styled.div`
  display: flex;
  gap: 2rem;
`;
const Aside = styled.aside`
  display: flex;
  justify-content: space-between;
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
  const { allPodcasts, isLoading, homePageDisplayedPodcasts, sorting } =
    useSelector((state) => state.podcastsReducer);
  const dispatch = useDispatch();
  const backToHome = () => {
    dispatch(setHomePageDisplayedPodcasts(allPodcasts));
  };
  const sortAlphabetically = (podcastArray) => {
    const lowercase = podcastArray.map((item) => {
      return { ...item, title: item.title.toLowerCase() };
    });
    const sortedLowercase = lowercase.sort((a, b) => {
      if (sorting === 'descending') {
        dispatch(setSorting('ascending'));
        return a.title > b.title ? 1 : -1;
      }
      if (sorting === 'ascending') {
        dispatch(setSorting('descending'));
        return a.title > b.title ? -1 : 1;
      }
    });
    dispatch(setHomePageDisplayedPodcasts(sortedLowercase));
    return sortedLowercase;
  };
  return (
    <Main>
      <MainRight>
        <Aside>
          <Menu>
            <p>
              <AiOutlineHome className="icon-color" onClick={backToHome} />
            </p>
            <p>
              <AiOutlineSearch className="icon-color" />
            </p>
            <p>
              {sorting === 'descending' ? (
                <FcAlphabeticalSortingAz
                  className="icon-color"
                  onClick={() => sortAlphabetically(allPodcasts)}
                />
              ) : (
                <FcAlphabeticalSortingZa
                  className="icon-color"
                  onClick={() => sortAlphabetically(allPodcasts)}
                />
              )}
            </p>
          </Menu>
          <LogInButtons>
            <Link to="/signup">
              <Buttons $backgroundColor={'red'}>Signup</Buttons>
            </Link>
            <Link to="/signup">
              <Buttons $backgroundColor={'red'}>Login</Buttons>
            </Link>
          </LogInButtons>
        </Aside>
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
      </MainRight>
    </Main>
  );
};

export default Home;
