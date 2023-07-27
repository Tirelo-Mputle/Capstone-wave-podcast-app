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
  width: 6rem;
`;
const Image = styled.img`
  width: 5rem;
  border-radius: 0.25rem;
`;
const Title = styled.p`
  font-weight: 600;
`;

const HomePodcast = ({ item }) => {
  const { isLoading } = useSelector((state) => state.podcastsReducer);
  const { description, image, id: podcastId, title } = item;
  const dispatch = useDispatch();

  const getSinglePodcast = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetch(
        `https://podcast-api.netlify.app/id/${podcastId}`
      );
      const result = await response.json();
      if (result) {
        console.log(result);
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
    <Link to={`/podcast/${podcastId}`} onClick={() => getSinglePodcast()}>
      <PodcastContainer>
        <Image src={image} alt={`${title}`} />
        <Title>{title}</Title>
        <p>{description.substring(0, 50)}...</p>
      </PodcastContainer>
    </Link>
  );
};

export default HomePodcast;
