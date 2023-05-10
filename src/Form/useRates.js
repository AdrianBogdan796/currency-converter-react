import { useEffect, useState } from "react";

export const useRates = () => {
  const [data, setData] = useState({ loading: "waiting" });
  const URL =
    "https://api.exchangerate.host/latest?symbols=USD,EUR,CHF,GBP&base=PLN";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        setData({
          loading: "success",
          jsonData,
        });
      } catch {
        setData({
          loading: "failed",
        });
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return data;
};
