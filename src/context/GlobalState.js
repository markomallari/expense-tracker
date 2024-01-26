import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//initial state
const initialState = {
  transactions: [
    { id: Math.floor(Math.random() * 100000000), text: 'Flower', amount: -20 },
    { id: Math.floor(Math.random() * 100000000), text: 'Salary', amount: 300 },
    { id: Math.floor(Math.random() * 100000000), text: 'Book', amount: -10 },
    { id: Math.floor(Math.random() * 100000000), text: 'Camera', amount: 150 }
  ]
}

// create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (<GlobalContext.Provider value={{
      transactions:state.transactions,
      deleteTransaction,
      addTransaction
    }}>
    {children}
  </GlobalContext.Provider>)
}