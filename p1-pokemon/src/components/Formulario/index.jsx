import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";
// import { FormularioContext } from "../../context/contextoFormulario"

// Neste componente temos nosso formulário e dentro dele
// temos os componentes que precisam consumir nosso estado.
// Lembre-se qual é o passo que devemos dar para que nosso
// componentes podem consumir um estado global.


const Formulario = () => {

  // const {ocorrencias, adicionarOcorrencia} = useContext(FormularioContext)

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">
          {/*
           Se ao menos tivéssemos uma maneira de "encapsular" nossos componentes
           para que possam acessar o estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nome-secao">
                <img src={treinador} alt="treinador" />
                <span>Treinador</span>
              </p>
              
              <Input name="nome" placeholder="Seu nome"  label="Nome" />
              <Input name="sobrenome" placeholder="Seu sobrenome" label="Sobrenome" />
              <Input name="email" placeholder="Seu email" label="Email" type="email" />
            </div>
            <div>
              <p className="nome-secao">
                <img src={pikachu} alt="pikachu" />
                <span>Pokémon</span>
              </p>
              <Input name="nomePokemon" placeholder="Nome" label="Nome" />
              <Input name="tipoPokemon" placeholder="Tipo" label="Tipo" />
              <Input name="elementoPokemon" placeholder="Elemento" label="Elemento" />
              <Input name="alturaPokemon" placeholder="Altura" label="Altura" />
              <Input name="idadePokemon" placeholder="Idade" label="Idade" />
            </div>
          </div>
          <Detalhe />
        </div>
      </div>
    </>
  );
};

export default Formulario;
