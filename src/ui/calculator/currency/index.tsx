import { CurrencySpan } from './styled';
import type { CurrencyProps } from './types';

const Currency = ({
  type,
  isActive = false,
  isStatic = false,
  onClickHandler = undefined,
}: CurrencyProps) => (
  <CurrencySpan
    type={type}
    isActive={isActive}
    isStatic={isStatic}
    onClick={() => onClickHandler?.(type)}
  >
    {type}
  </CurrencySpan>
);

export default Currency;
