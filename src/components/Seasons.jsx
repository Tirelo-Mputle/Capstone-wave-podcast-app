import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Episode from './Episode';
import { setCurrentSeason } from '../globalState/reducers/podcastsReducer';

const Seasons = () => {
  const { currentSeason, currentPodcast } = useSelector(
    (state) => state.podcastsReducer
  );
  const dispatch = useDispatch();
  const seasons = currentPodcast.seasons;
  //   const episodes = currentPodcast.sea
  console.log(seasons);
  return (
    <div>
      <p>Seasons</p>
      <select
        name="seasons"
        id="seasons"
        value={currentSeason}
        onChange={(e) => {
          console.log(e.target);
          dispatch(setCurrentSeason(e.target.value));
        }}
      >
        {seasons
          .map((singleSeason, index) => {
            return (
              <option key={index} value={singleSeason.season}>
                season {singleSeason.season}
              </option>
            );
          })
          .reverse()}
      </select>
      <p>Episodes</p>
      <Episode />
    </div>
  );
};

export default Seasons;
