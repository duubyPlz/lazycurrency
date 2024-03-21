import { styled } from '@compiled/react';

export const Wrapper = styled.div({
  textAlign: 'right',
  '@media (max-width: 768px)': {
    lineHeight: 0.7,
  },
});
