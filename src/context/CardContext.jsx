import {  createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helper/helper";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
};

const reducer = (state ,action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload ,quantity: 1 })
            }
            return{
                ...state,
                checkout:false,
                ...sumProducts(state.selectedItems)
            }
        default:
            throw new Error("Invalid Action!")
    }
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