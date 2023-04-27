import { useState, useRef } from "react";
import "./style.css";
import { currencies } from "../currencies";
import Clock from "./Clock";

const Form = ({ result, calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    setTimeout(() => {
      setAmount("");
    }, 100);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    clearInput();
  };

  const onChangeCurrency = ({ target }) => {
    const selectCurrency = currencies.find(
      (currency) => currency.name === target.value
    );
    setCurrency(selectCurrency);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <Clock />
      <label>
        <span className="form__legend">Kalkulator walut</span>
        <select
          value={currency.name}
          className="form__field"
          onChange={onChangeCurrency}
        >
          {currencies.map((currency) => (
            <option key={currency.id}>{currency.name}</option>
          ))}
          ;
        </select>
      </label>
      <label>
        <input
          className="form__result"
          placeholder="podaj PLN"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          type="number"
          name="amount"
          step="0.5"
          min="1"
          required
        />
      </label>
      <button onClick={focusInput} className="form__button" type="submit">
        Przelicz
      </button>
      <p className="form__result">
        {result
          ? `za ${result.sourceAmount.toFixed(
              2
            )}zł otrzymamy ${result.targetAmount.toFixed(2)} ${
              result.currency.id
            }`
          : "Wydaj"}
      </p>
      <p>Kurs walut z dnia 22.03.2023</p>
    </form>
  );
};

export default Form;
