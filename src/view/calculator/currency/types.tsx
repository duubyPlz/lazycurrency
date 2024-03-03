export type CurrencyProps = {
  type: CurrencyType;
  focused?: boolean;
  isTop?: boolean;
  children: string;
};

// TODO Refactor: Move into model
export enum CurrencyType {
  AUD = 'AUD',
  HKD = 'HKD',
  MYR = 'MYR',
  TWD = 'TWD',
}
