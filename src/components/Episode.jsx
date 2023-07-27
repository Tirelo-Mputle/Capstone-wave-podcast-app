import React from 'react';
import { useSelector } from 'react-redux';
const Episode = () => {
  const { currentPodcast, isLoading } = useSelector(
    (state) => state.podcastsReducer
  );
  const firstEpisode = currentPodcast.seasons[0].title;
  return <div>Episode</div>;
};

export default Episode;
