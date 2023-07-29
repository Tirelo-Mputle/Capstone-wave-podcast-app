import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// routes
import { Home, Signup, SinglePodcast } from './pages';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  setAllPodcasts,
  setIsLoading,
  setHomePageDisplayedPodcasts,
} from './globalState/reducers/podcastsReducer';
import { podcastsReducer } from './globalState/reducers/podcastsReducer';
function App() {
  const { homePageDisplayedPodcasts } = useSelector(
    (state) => state.podcastsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const getPodcasts = async () => {
      const response = await fetch('https://podcast-api.netlify.app/shows');
      const result = await response.json();

      if (result) {
        dispatch(setHomePageDisplayedPodcasts(result));
        dispatch(setAllPodcasts(result));
        console.log(homePageDisplayedPodcasts);
        dispatch(setIsLoading(false));
      } else {
        console.log('error');
      }
      return result;
    };
    getPodcasts();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/podcast/:id" element={<SinglePodcast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
