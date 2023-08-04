import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Navbar } from '../components';
import { Link } from 'react-router-dom';
const FavouritesContainer = styled.div`
  color: white;
`;
const EpisodeContainer = styled.div`
  background-color: #242424;
  margin: 1rem 0.5rem;
  padding: 0.8rem;
  border-radius: 0.25rem;
`;
const ImageDescriptionContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;
const Description = styled.p`
  font-size: 0.8rem;
  margin: 0.7rem 0;
`;
const Image = styled.img`
  width: 40%;
`;
const Favourite = ({ details, showNameId }) => {
  const {
    title,
    episode,
    file,
    image,
    description,
    currentSeason,
    showTitle,
    showId,
  } = details;
  return (
    <>
      <EpisodeContainer>
        <Link to={`/`}>
          <button>Go home</button>
        </Link>
        <h3>{showTitle}</h3>
        <h4>{`S:${currentSeason} EP${episode}: ${title}`}</h4>
        <ImageDescriptionContainer>
          <Image src={image} alt={title} />

          <Description>{description}</Description>
        </ImageDescriptionContainer>
        <audio controls>
          <source src={file} type="audio/mp3" />
        </audio>
      </EpisodeContainer>
    </>
  );
};
const Favourites = () => {
  const { favourites } = useSelector((state) => state.podcastsReducer);
  return (
    <>
      <Navbar />
      <FavouritesContainer>
        <h1>Favourites</h1>
        <div>
          {favourites.map((item) => {
            const parsedItemDetails = JSON.parse(item.episodeDetails);

            return (
              <Favourite
                key={item.id}
                details={parsedItemDetails}
                showNameId={item.showId}
              >
                {parsedItemDetails.description}
              </Favourite>
            );
          })}
        </div>
      </FavouritesContainer>
    </>
  );
};

export default Favourites;
