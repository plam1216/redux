import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';


// STORE -> GLOBALIZED STATE


// ACTION -> "INCREMENT"
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER -> TRANSFORM STATE BASED ON ACTION
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
  }
}

let store = configureStore({reducer: counter})

// Display to console
store.subscribe(() => console.log(store.getState()))


// DISPATCH -> SEND THE ACTION TO REDUCER
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);