import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.styles.scss';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './contexts/user.context';
import { CartProvider } from './contexts/cart.context';
import { CategoriesProvider } from './contexts/categories.context';




ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App /> 
          </CartProvider>                
        </CategoriesProvider>
     </UserProvider>  
     </BrowserRouter>
  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
