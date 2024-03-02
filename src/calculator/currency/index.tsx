import React from 'react';

type CurrencyProps = {
  children: string;
};

const Currency = ({
  children,
}: CurrencyProps) => <div>{children}</div>;

export default Currency;
