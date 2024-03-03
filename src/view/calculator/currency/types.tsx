export type CurrencyProps = {
  type: CurrencyType;
  active?: boolean;
  children: string;
};

export enum CurrencyType {
  AUD = 'aud',
  HKD = 'hkd',
  MYR = 'myr',
  TWD = 'twd',
}
