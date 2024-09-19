import {  createContext, useContext, useReducer } from "react"

const initialState = {};

const reducer = (sate ,action) => {
    console.log(action)
};
const CardContext = createContext();

function CardProvider({children}) {
    const [ state , dispatch ] = useReducer(reducer , initialState)
  return (
    <CardContext.Provider value={{state, dispatch}} >
        {children}
    </CardContext.Provider>
  )
}



const useCard = () => {
    const {state , dispatch} = useContext(CardContext);
    return [state , dispatch]
}
export default CardProvider

export {useCard};