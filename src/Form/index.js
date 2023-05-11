import { Result } from "./Result";
import { useState } from "react";
import { Clock } from "./Clock";
import {
  StyledContainer,
  StyledForm,
  StyledLegend,
  StyledInput,
  StyledButton,
  Link,
  StyledLabel,
  Loading,
  Error,
} from "./styled";
import { useRates } from "./useRates";

export const Form = () => {
  const data = useRates();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("CHF");
  const [result, setResult] = useState("");

  const calcResult = (amount, currency, targetAmount) => {
    const cost = data.jsonData.rates[currency];

    setResult({
      fromAmount: +amount,
      currency,
      toAmount: cost * amount,
      targetAmount,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calcResult(amount, currency);
    setAmount("");
  };

  return (
    <StyledContainer>
      {data.loading === "waiting" ? (
        <Loading>
          "Witam. <b>Pobieramy dane z api Europejskiego Banku Centralnego</b>
          Proszę poczekać chwilę.
        </Loading>
      ) : data.loading === "failed" ? (
        <Error>
          Przępraszamy. Coś poszło nie tak. Proszę sprawdzić, czy jest
          połączenie z siecią, jeśli tak to błąd leży po naszej stronie
          przepraszamy.
        </Error>
      ) : (
        <>
          <Clock />
          <StyledForm onSubmit={onFormSubmit}>
            <StyledLegend>Kalkulator Walut</StyledLegend>
            <p>
              <StyledLabel>
                <StyledInput
                  type="number"
                  min="0.01"
                  step="any"
                  name="amount"
                  required
                  placeholder="PLN"
                  max="9999999999999"
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                />
              </StyledLabel>
            </p>
            <p>
              <StyledLabel>
                <StyledInput
                  onChange={({ target }) => setCurrency(target.value)}
                  as={"select"}
                  name="currency"
                >
                  {Object.keys(data.jsonData.rates).map((rate) => (
                    <option key={rate} value={rate}>
                      {rate}
                    </option>
                  ))}
                </StyledInput>
              </StyledLabel>
            </p>
            <Result result={result} />
            <p>
              <StyledButton>Przelicz</StyledButton>
            </p>
            <p>
              <br />
              Kursy pobrane z (
              <Link
                rel="noreferrer"
                href="https://exchangerate.host/#/"
                target="_blank"
              >
                API Europejskiego Banku Centralnego
              </Link>
              )
            </p>
          </StyledForm>
        </>
      )}
    </StyledContainer>
  );
};
