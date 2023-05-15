import { useState } from "react";

export const useResult = () => {
  const [result, setResult] = useState(0);

  const calculateResult = (
    ratesData,
    inputCurrency,
    outputCurrency,
    amount
  ) => {
    const inputRate = ratesData.rates[inputCurrency];
    const outputRate = ratesData.rates[outputCurrency];

    setResult((result) => (amount * outputRate) / inputRate);
  };

  return { result, calculateResult };
};
