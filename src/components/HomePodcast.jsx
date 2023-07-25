import React from 'react';
import { styled } from 'styled-components';

const PodcastContainer = styled.div`
  width: 8rem;
`;
const Image = styled.img`
  width: 6rem;
  border-radius: 0.25rem;
`;
const Title = styled.p`
  font-weight: 600;
`;

const HomePodcast = ({ item }) => {
  const { description, image, id, title } = item;
  return (
    <PodcastContainer>
      <Image src={image} alt={`${title}`} />
      <Title>{title}</Title>
      <p>{description.substring(0, 50)}...</p>
    </PodcastContainer>
  );
};

export default HomePodcast;
