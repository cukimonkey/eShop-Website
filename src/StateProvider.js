import React from 'react';
import { createContext, useContext, useReducer } from 'react';

//Prepare the data layer
export const StateContext = createContext();

//wrap our app and provide the data layar with data

export const StateProvider = ({reducer, initialState, children}) => {
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
};

//Pull the information from the datalayaer to use it in components

export const useStateValue = () => useContext(StateContext);