import React from 'react';
import { styled } from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 0.7rem;
  border: 1px solid black;
  border-radius: 2rem;
  background-color: ${(props) => props.$backgroundColor};
`;

const Buttons = (props) => {
  return (
    <Button $backgroundColor={props.$backgroundColor}>{props.children}</Button>
  );
};

export default Buttons;
