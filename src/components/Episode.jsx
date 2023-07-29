import React from 'react';
import { useSelector } from 'react-redux';
const Episode = ({ item }) => {
  const { description, episode, file, title } = item;
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <audio controls>
        <source src={file} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Episode;
