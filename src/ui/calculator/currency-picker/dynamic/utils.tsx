import { RefObject } from 'react';
import { CurrencyType } from '../../../../state/calculator/types';
import { PADDING } from './constants';

export const getBottomCurrencies = (): CurrencyType[] =>
  Object.values(CurrencyType).filter(
    (currencyType) => currencyType !== CurrencyType.AUD,
  );

// TODO Tests
export const calculateShiftWidth = (
  ref: RefObject<HTMLSpanElement>,
): number => {
  const currentElement = ref?.current;

  const parentWidth = currentElement?.offsetParent?.clientWidth;
  const offsetLeft = currentElement?.offsetLeft;
  const offsetWidth = currentElement?.offsetWidth;

  const toTransform =
    parentWidth && offsetLeft && offsetWidth
      ? parentWidth - (offsetLeft + offsetWidth)
      : 0;
  return toTransform - toTransform / PADDING;
};
