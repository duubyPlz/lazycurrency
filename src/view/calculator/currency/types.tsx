export type CurrencyProps = {
  type: CurrencyType;
  active?: boolean;
  children: string;
};

// TODO Refactor: Move into model
export enum CurrencyType {
  AUD = 'AUD',
  HKD = 'HKD',
  MYR = 'MYR',
  TWD = 'TWD',
}
