import { useRef } from 'react';
import { CurrencySpan } from './styled';
import type { CurrencyProps } from './types';

const Currency = ({
  type,
  isActive = false,
  isStatic = false,
  onClickHandler = undefined,
}: CurrencyProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <CurrencySpan
      type={type}
      ref={ref}
      isActive={isActive}
      isStatic={isStatic}
      onClick={() => onClickHandler?.(type, ref)}
    >
      {type}
    </CurrencySpan>
  );
};

export default Currency;
