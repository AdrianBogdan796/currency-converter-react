import Conteiner from "./Container";
import { Form } from "./Form";
import Header from "./Header";

function App() {
  return (
    <Conteiner>
      <Header />
      <main>
        <Form />
      </main>
    </Conteiner>
  );
}

export default App;
