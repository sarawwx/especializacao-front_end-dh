// Aqui devemos criar nosso contexto e nosso provider.
import { createContext, useReducer } from 'react'

export const FormularioContext = createContext()

const reducer = (state, action)=>{
  switch(action.type){
    case "nome":
      return{
        ...state,
        nome: action.payload.nome
      }
    case "sobrenome":
      return{
        ...state,
        sobrenome: action.payload.sobrenome
      }
    case "email":
      return{
        ...state,
        email: action.payload.email
      }
    case "nomePokemon":
    return{
      ...state,
      nomePokemon: action.payload.nomePokemon
    }
    case "tipoPokemon":
      return{
        ...state,
        tipoPokemon: action.payload.tipoPokemon
      }
    case "elementoPokemon":
      return{
        ...state,
        elementoPokemon: action.payload.elementoPokemon
      }
    case "alturaPokemon":
      return{
        ...state,
        alturaPokemon: action.payload.alturaPokemon
      }
    case "idadePokemon":
      return{
        ...state,
        idadePokemon: action.payload.idadePokemon
      }
    case "ATUALIZAR":
      return{
        ...state,
        nome: action.payload.nome,
        sobrenome: action.payload.sobrenome,
        email: action.payload.email,
        nomePokemon: action.payload.nomePokemon,
        tipoPokemon: action.payload.tipoPokemon,
        elementoPokemon: action.payload.elementoPokemon,
        alturaPokemon: action.payload.alturaPokemon,
        idadePokemon: action.payload.idadePokemon
      }
    case "ATUALIZAR_TREINADOR":
      return{
        ...state,
        nome: action.payload.nome,
        sobrenome: action.payload.sobrenome,
        email: action.payload.email,
      }
    case "ATUALIZAR_POKEMON":
      return{
        ...state,
        nomePokemon: action.payload.nomePokemon,
        tipoPokemon: action.payload.tipoPokemon,
        elementoPokemon: action.payload.elementoPokemon,
        alturaPokemon: action.payload.alturaPokemon,
        idadePokemon: action.payload.idadePokemon
      }
    default:
      return state
  }
}

const initialState = {
  nome: "",
  sobrenome: "",
  email: "",
  nomePokemon: "",
  tipoPokemon: "",
  elementoPokemon: "",
  alturaPokemon: "",
  idadePokemon: "" 
}


const FormularioContextProvider = ({children}) =>{

  const [state, dispatch] = useReducer(reducer, initialState )

  // const [ocorrencias, setOcorrencias] = useState({
  //   nome: "",
  //   sobrenome: "",
  //   email: "",
  //   nomePokemon: "",
  //   tipoPokemon: "",
  //   elementoPokemon: "",
  //   alturaPokemon: "",
  //   idadePokemon: "" 
  // }) 


  const adicionarOcorrencia = (novaOcorrencia)=>{



    dispatch(novaOcorrencia)

    // setOcorrencias({
    //   ...ocorrencias,
    //   [input]: valor
    // })
  }


  return(
    <>
      <FormularioContext.Provider
      value={{
        state,
        adicionarOcorrencia
      }}>
        {children}
      </FormularioContext.Provider>
    </>
  )

}

export default FormularioContextProvider