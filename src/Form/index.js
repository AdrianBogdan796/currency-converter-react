import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { useRatesData } from "./useRatesData";
import { useResult } from "./useResult";
import {
  StyledContainer,
  StyledForm,
  StyledLegend,
  StyledInput,
  StyledOutput,
  Select,
  StyledButton,
  Information,
  Error,
  Loading,
} from "./styled";

const StyledInput_MAX_LENGTH = 14;

export const Form = () => {
  const [StyledInputCurrency, setStyledInputCurrency] = useState("EUR");
  const [outputCurrency, setOutputCurrency] = useState("EUR");
  const [amount, setAmount] = useState();

  const ratesData = useRatesData();
  const { calculateResult, result } = useResult();

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult(ratesData, StyledInputCurrency, outputCurrency, amount);
  };

  return (
    <StyledContainer onSubmit={onFormSubmit}>
      <StyledForm>
        <StyledLegend>Kalkulator walut</StyledLegend>
        <Clock />
        {ratesData.status === "loading" ? (
          <>
            <Loading>Prosimy czekać, pobieramy aktualne kursy walut.</Loading>
          </>
        ) : ratesData.status === "error" ? (
          <Error>
            Coś poszło nie tak. Sprawdź swoje połączenie z internetem lub
            spróbuj ponownie później.
          </Error>
        ) : (
          <>
            <StyledInput
              type="number"
              value={amount}
              onChange={({ target }) =>
                setAmount(target.value.slice(0, StyledInput_MAX_LENGTH))
              }
            />
            <Select
              value={StyledInputCurrency}
              onChange={({ target }) => setStyledInputCurrency(target.value)}
            >
              {Object.keys(ratesData.rates).map((StyledInputCurrency) => (
                <option value={StyledInputCurrency} key={StyledInputCurrency}>
                  {StyledInputCurrency}
                </option>
              ))}
            </Select>
            <StyledOutput>
              <Result result={result} />
              <Select
                value={outputCurrency}
                onChange={({ target }) => setOutputCurrency(target.value)}
              >
                {Object.keys(ratesData.rates).map((outputCurrency) => (
                  <option value={outputCurrency} key={outputCurrency}>
                    {outputCurrency}
                  </option>
                ))}
              </Select>
            </StyledOutput>
            <StyledButton>Przelicz</StyledButton>
            <Information>
              <p>Kursy walut na dzień {ratesData.date}.</p>
            </Information>
          </>
        )}
      </StyledForm>
    </StyledContainer>
  );
};
