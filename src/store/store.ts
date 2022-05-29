import { combineReducers } from "@reduxjs/toolkit";
import { createStore, compose } from "redux";

const rootReducer = combineReducers({
  // TODO add your reducer here
});

// Definimos um tipo para nossa loja ou estado global
export type IRootState = ReturnType<typeof rootReducer>;

// Com isso declaramos os tipos do objeto window para poder obter as vantagens da extensão redux
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
