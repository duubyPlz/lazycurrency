import Currency from '../../currency';

export const DynamicPicker = () => {
  return (
    <div>
      <Currency type='twd'>TWD</Currency>
      <Currency type='myr'>MYR</Currency>
      <Currency type='hkd' active>
        HKD
      </Currency>
    </div>
  );
};
