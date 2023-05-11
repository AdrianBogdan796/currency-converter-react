import { useEffect, useState } from "react";

export const useRates = () => {
  const [data, setData] = useState({ status: "waiting" });
  const URL =
    "https://api.exchangerate.host/latest?symbols=USD,EUR,CHF,GBP&base=PLN";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { rates, date } = await response.json();

        setData({
          status: "success",
          rates,
          date,
        });
      } catch {
        setData({
          status: "error",
        });
      }
    };
    setTimeout(fetchRates, 1000);
  }, []);

  return data;
};
