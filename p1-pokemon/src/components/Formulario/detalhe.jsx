import React, { useContext } from "react";
import { FormularioContext } from "../../context/contextoFormulario"

const Detalhe = () => {
  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  const {state} = useContext(FormularioContext)

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">

          <p>Nome: {state.nome ? state.nome : ""}</p>
          <p>Sobrenome: {state.sobrenome ? state.sobrenome : ""}</p>
          <p>Email: {state.email ? state.email : ""}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome: {state.nomePokemon ? state.nomePokemon : ""}</p>
          <p>Tipo: {state.tipoPokemon ? state.tipoPokemon : ""}</p>
          <p>Elemento: {state.elementoPokemon ? state.elementoPokemon : ""}</p>
          <p>Altura: {state.alturaPokemon ? state.alturaPokemon : ""}</p>
          <p>Idade: {state.idadePokemon ? state.idadePokemon : ""}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;
