import React from "react";
import Listas from "./listas.jsx";
import Renderizacao from "./Renderizacao.jsx";
import Eventos from "./Eventos.jsx";
const App = () => {
  return (
    <div className="App">
      <h2>Renderizacao Condicional</h2>
      <Renderizacao />
      <h2>Iteracao em listas</h2>
      <Listas />
      <h2>Manipulando eventos</h2>
      <Eventos />
    </div>
  );
};

export default App;
