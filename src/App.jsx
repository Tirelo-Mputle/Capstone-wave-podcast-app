import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// routes
import { Home, Signup } from './pages';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setAllPodcasts } from './globalState/reducers/podcastsReducer';
import { podcastsReducer } from './globalState/reducers/podcastsReducer';
function App() {
  const { allPodcasts } = useSelector((state) => state.podcastsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPodcasts = async () => {
      const response = await fetch('https://podcast-api.netlify.app/id/10716');
      const result = await response.json();

      console.log(result);
    };
    getPodcasts();
  }, []);
  useEffect(() => {
    const getPodcasts = async () => {
      const response = await fetch('https://podcast-api.netlify.app/shows');
      const result = await response.json();
      console.log(result);
      dispatch(setAllPodcasts(result));
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
