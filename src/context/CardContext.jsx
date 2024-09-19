import {  createContext, useReducer } from "react"

const initialState = {};

const reducer = () => {};
const CardContext = createContext();

function CardProvider(children) {
    const [ state , dispatch ] = useReducer(reducer , initialState)
  return (
    <CardContext.Provider value={state} >
        {children}
    </CardContext.Provider>
  )
}

export default CardProvider