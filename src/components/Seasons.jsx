import React from 'react';
import { useSelector } from 'react-redux';

const Seasons = () => {
  const { currentPodcast, isLoading } = useSelector(
    (state) => state.podcastsReducer
  );
  return (
    <div>
      <p>Seasons</p>
      <select name="seasons" id="seasons">
        <option value="1">season 1</option>
      </select>
    </div>
  );
};

export default Seasons;
