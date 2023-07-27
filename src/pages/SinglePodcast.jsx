import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Seasons from '../components/Seasons';
const Header = styled.div`
  background-color: yellow;
`;
const Image = styled.img`
  width: 5rem;
`;
const PodcastDetails = styled.div`
  display: flex;
`;
const SinglePodcast = () => {
  const { currentPodcast, isLoading } = useSelector(
    (state) => state.podcastsReducer
  );

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <Header>
            <div>icons</div>
            <PodcastDetails>
              <Image src={currentPodcast.image} alt={currentPodcast.title} />
              <p>Podcast</p>
              <p>{currentPodcast.title}</p>
            </PodcastDetails>
            <div>
              <div>follow and share icons</div>
              <div>
                <div>
                  <p>lastest podcast</p>
                </div>
                <div>
                  <p>About podcast</p>
                  <p>{currentPodcast.description}</p>
                </div>
              </div>
            </div>
          </Header>
          <Seasons />
        </>
      )}
    </>
  );
};

export default SinglePodcast;
