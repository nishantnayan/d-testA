import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    cards : [
        { id:1, cardHolderName: "John", cardNo: "5555 7777 8888 9999", validThruv:"12/25", cvv: 100 },
        { id:2, cardHolderName: "Joy", cardNo: "5555 7777 8888 9999",  validThruv:"12/27", cvv: 101},
        { id:3, cardHolderName: "Mark", cardNo: "5555 7777 8888 9999",  validThruv:"12/35", cvv: 102},
    ]

}

// Create Context
export const GlobalContext = createContext(initialState);


// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions
    const removeCard = (id) => {
      dispatch({
        type: 'REMOVE_CARD',
        payload: id
      })
    }
  
    const addCard = (card) => {
      dispatch({
        type: 'ADD_CARD',
        payload: card
      })
    }
  
    const editCard = (card) => {
      dispatch({
        type: 'EDIT_CARD',
        payload: card
      })
    }
  
    return (
      <GlobalContext.Provider value={{
        cards: state.cards,
        removeCard,
        addCard,
        editCard
      }}>
        {children}
      </GlobalContext.Provider>
    )
  }