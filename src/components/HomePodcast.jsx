import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentPodcast,
  setIsLoading,
  setCurrentSeason,
} from '../globalState/reducers/podcastsReducer';

const PodcastContainer = styled.div`
  width: 8.5rem;
  margin-bottom: 2rem;
  background-color: #181818;
  color: #fff;
`;
const Image = styled.img`
  width: 5rem;
  border-radius: 0.25rem;
  margin: 0 20%;
`;
const Title = styled.p`
  font-weight: 600;
  font-size: 0.85rem;
`;
const Description = styled.p`
  font-size: 0.7rem;
`;
const HomePodcast = ({ item }) => {
  const genreNames = {
    1: 'Personal Growth',
    2: 'True Crime and Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family}',
  };
  const { isLoading } = useSelector((state) => state.podcastsReducer);
  const {
    description,
    image,
    id: podcastId,
    title,
    seasons,
    updated,
    genres,
  } = item;
  const dispatch = useDispatch();
  const lastUpdateDate = new Date(updated);

  const day = lastUpdateDate.getDate();
  const month = lastUpdateDate.getMonth();
  const year = lastUpdateDate.getFullYear();

  const date = `${day}/${month + 1}/${year}`;
  const getSinglePodcast = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetch(
        `https://podcast-api.netlify.app/id/${podcastId}`
      );
      const result = await response.json();
      if (result) {
        dispatch(setCurrentPodcast(result));
        dispatch(setCurrentSeason(result.seasons.length));
        dispatch(setIsLoading(false));
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link
      to={`/podcast/${podcastId}`}
      onClick={() => getSinglePodcast()}
      className="link"
    >
      <PodcastContainer>
        <Image src={image} alt={`${title}`} />
        <Title>{title}</Title>
        <p>Seasons: {seasons}</p>
        <p>Last update: {date}</p>
        <div>
          {genres.map((genre, index) => {
            return <span key={index}>{genreNames[genre]}</span>;
          })}
        </div>
        <Description>{description.substring(0, 50)}...</Description>
      </PodcastContainer>
    </Link>
  );
};

export default HomePodcast;
