import Conteiner from "./Container";
import Form from "./Form";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (amount, currency) => {
      const rate = currency?.ratio;
      setResult({
          sourceAmount: +amount,
          targetAmount: +amount / rate,
          currency
      });
  };

  return (
    <Conteiner>
    <Header />
    <main>
        <Form result={result} calculateResult={calculateResult} />
   </main>
    </Conteiner>
  );
}

export default App;
