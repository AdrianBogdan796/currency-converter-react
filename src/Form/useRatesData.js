import { useEffect, useState } from "react";

export const useRatesData = () => {
  const currencyApi = "https://api.exchangerate.host/latest";
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(currencyApi);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { rates, date } = await response.json();

        setRatesData({
          status: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          status: "error",
        });
      }
    };
    setTimeout(fetchRates, 1000);
  }, []);
  return ratesData;
};
