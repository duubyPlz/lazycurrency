import { styled } from '@compiled/react';
import { CurrencyType } from '../../../state/calculator/types';

// TODO Tests
const getCurrencyActiveColor = (
  type: CurrencyType,
  isActive: boolean,
) => {
  const defaultColor = 'rgba(255, 255, 255, 0.3)';
  if (!isActive) return defaultColor;

  switch (type) {
    case CurrencyType.AUD:
      return 'rgb(11, 220, 0)';
    case CurrencyType.HKD:
      return 'rgb(236, 0, 0)';
    case CurrencyType.MYR:
      return '#ffd900';
    case CurrencyType.TWD:
      return '#0076b6';
    default:
      return defaultColor;
  }
};

export const CurrencySpan = styled.span<{
  type: CurrencyType;
  isActive: boolean;
  isStatic: boolean;
}>({
  cursor: (props) => (props.isStatic ? 'default' : 'pointer'),
  padding: '0 0.23em',
  userSelect: 'none',
  fontSize: (props) => (props.isActive ? '25px' : '20px'),
  color: (props) =>
    getCurrencyActiveColor(props.type, props.isActive),
  '@media (max-width: 768px)': {
    fontSize: '20px',
  },
});
