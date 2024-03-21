import { styled } from '@compiled/react';

export const FieldInput = styled.input<{ type: string }>({
  fontFamily: "'Exo', sans-serif",
  overflow: 'hidden',
  wordWrap: 'break-word',
  resize: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '12px 15px',
  border: 'none',
  borderLeft: 'solid 1px rgba(0, 0, 0, 0)',
  borderRight: 'solid 1px rgba(0, 0, 0, 0)',
  color: 'white',
  fontSize: '40px',
  maxWidth: '80vw',
});
