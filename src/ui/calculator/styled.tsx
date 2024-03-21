import { styled } from '@compiled/react';

export const Wrapper = styled.div({
  height: 'min-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  transition: '1s',
  margin: '10px',
  gap: '30px',
});

export const CalculatorSection = styled.div({
  flexGrow: 0,
});
