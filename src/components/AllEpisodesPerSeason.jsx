import React from 'react';
import Episode from './Episode';

const AllEpisodesPerSeason = ({ currentSeasonEpisodes }) => {
  console.log(currentSeasonEpisodes);
  return (
    <div>
      <div>
        {currentSeasonEpisodes.map((item) => {
          return <Episode key={item.episode} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AllEpisodesPerSeason;
