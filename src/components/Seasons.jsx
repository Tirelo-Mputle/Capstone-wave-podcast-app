import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AllEpisodesPerSeason from './AllEpisodesPerSeason';
import { setCurrentSeason } from '../globalState/reducers/podcastsReducer';

const Seasons = () => {
  const { currentSeason, currentPodcast } = useSelector(
    (state) => state.podcastsReducer
  );
  const dispatch = useDispatch();
  const seasons = currentPodcast.seasons;

  const currentSeasonEpisodes = seasons[currentSeason - 1].episodes;
  console.log(currentSeasonEpisodes);
  return (
    <div>
      <p>Seasons</p>
      <select
        name="seasons"
        id="seasons"
        value={currentSeason}
        onChange={(e) => {
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
      <AllEpisodesPerSeason currentSeasonEpisodes={currentSeasonEpisodes} />
    </div>
  );
};

export default Seasons;
