import { RefObject } from 'react';
import { CurrencyType } from '../../../../state/calculator/types';
import { PADDING } from './constants';

export const getBottomCurrencies = (): CurrencyType[] =>
  Object.values(CurrencyType).filter(
    (currencyType) => currencyType !== CurrencyType.AUD,
  );

export const calculateShiftWidth = (
  ref: RefObject<HTMLSpanElement>,
): number => {
  const currentElement = ref?.current;
  console.log('CURRENT EMEN', currentElement);
  const parentWidth = currentElement?.offsetParent?.clientWidth;
  console.log('PARENTS WIDTH!!!!!', parentWidth);
  const offsetLeft = currentElement?.offsetLeft;
  console.log('OFFSET LEFT', offsetLeft);
  const offsetWidth = currentElement?.offsetWidth;
  console.log('OFFSET WIDTH', offsetWidth);

  const toTransform =
    parentWidth && offsetLeft && offsetWidth
      ? parentWidth - (offsetLeft + offsetWidth)
      : 0;
  console.log('TO TRANSFORM', toTransform);
  return toTransform - toTransform / PADDING;
};
