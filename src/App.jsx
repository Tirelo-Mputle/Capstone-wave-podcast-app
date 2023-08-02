import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// routes
import { Home, Signup, SinglePodcast, Login } from './pages';
import supabase from './supabase/client';
// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  setAllPodcasts,
  setIsLoading,
  setHomePageDisplayedPodcasts,
  setUserDataFromDB,
  setHasAccount,
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

        dispatch(setIsLoading(false));
      } else {
        console.log('error');
      }
      return result;
    };
    getPodcasts();
  }, []);

  const fetchLoginData = async () => {
    const { data, error } = await supabase.from('user_login_data').select();
    if (error) {
      console.log(error);
    }
    if (data.length !== 0) {
      console.log(data);
      dispatch(setUserDataFromDB(data));
      dispatch(setHasAccount(true));
    }
  };
  useEffect(() => {
    fetchLoginData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/podcast/:id" element={<SinglePodcast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
