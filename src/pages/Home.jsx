import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/signup">To signup page</Link>
    </>
  );
};

export default Home;
