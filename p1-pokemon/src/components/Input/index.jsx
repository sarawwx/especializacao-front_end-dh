import React, { useContext, useState } from "react";
import { FormularioContext } from "../../context/contextoFormulario"

const Input = ({ name, label, type = "text", placeholder }) => {
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.

  const {state, adicionarOcorrencia} = useContext(FormularioContext)

  // Além disso, usaremos um estado local para lidar com o estado da input.

  const [value, setValue] = useState("")

  const onChange = (e) => {
    // Aqui devemos atualizar o estado local do input
    setValue(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }

    adicionarOcorrencia({
      type: name,
      payload: {
        [name]: value
      }
    })

    console.log(state)

  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
