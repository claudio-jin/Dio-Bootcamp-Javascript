import React from "react";

const buttonA = <button>Historico dos Clientes</button>;

const buttonB = <button>cadastrar cliente</button>;

const hasCustomer = true;

const Renderizacao = () => {
  const renderShowHistory = () => (
    <div>
      Clique no botao Abaixo os historicos dos clientes
      <br />
      {buttonA}
    </div>
  );

  const renderAddCustomer = () => (
    <div>
      clique abaixo para cadastrar os clientes
      <br />
      {buttonB}
    </div>
  );

  const showCustomer = () => {
    if (!hasCustomer) return null;

    return (
      <div>
        <h1>Nome do Cliente: claudio</h1>
      </div>
    );
  };

  console.log("hasCustomer, ", hasCustomer);
  return (
    <div>
      <p>Digital innovation</p>
      <div>{hasCustomer ? renderShowHistory() : renderAddCustomer()}</div>
      <div>{showCustomer()}</div>
    </div>
  );
};

export default Renderizacao;
