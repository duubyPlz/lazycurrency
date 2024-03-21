import { styled } from '@compiled/react';

export const Wrapper = styled.div<{ width: number }>({
  transform: (props) => `translate(${props.width}px)`,
});
