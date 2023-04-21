import Conteiner from "./Container";
import Form from "./Form";
import Header from "./Header";
import { useState } from "react";

function App() {

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
