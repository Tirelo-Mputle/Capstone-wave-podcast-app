import React, { useState, useEffect } from 'react';
import { setFavouriteSwitch } from '../globalState/reducers/podcastsReducer';
import { useSelector, useDispatch } from 'react-redux';
import supabase from '../supabase/client';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const Episode = ({ item, id, showId, currentSeason }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites } = useSelector((state) => state.podcastsReducer);
  const { description, episode, file, title } = item;
  const dispatch = useDispatch();
  const episodeWithId = { ...item, id, showId, currentSeason };

  const addToFavorites = async (ep) => {
    if (favourites !== null) {
      for (const fav of favourites) {
        if (fav.episodeId === id) return;
      }
    }
    const { data, error } = await supabase
      .from('userFavourites')
      .insert([
        { episodeId: id, episodeDetails: JSON.stringify(ep), showId: showId },
      ])
      .select();
    // dispatch(setFavourites({ name: showId, value: ep }));
    setIsFavourite(!isFavourite);
    dispatch(setFavouriteSwitch());
  };

  const removeFromFavourites = async () => {
    const { error } = await supabase
      .from('userFavourites')
      .delete()
      .eq('episodeId', id);
    setIsFavourite(!isFavourite);
    dispatch(setFavouriteSwitch());
  };
  return (
    <div>
      <h4>{title}</h4>
      <h5>Episode #{episode}</h5>
      {isFavourite ? (
        <button onClick={removeFromFavourites}>
          Remove from favourites <AiFillHeart />
        </button>
      ) : (
        <button onClick={() => addToFavorites(episodeWithId)}>
          Add to favourites <AiOutlineHeart />
        </button>
      )}
      <p>{description}</p>
      <audio controls>
        <source src={file} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Episode;
