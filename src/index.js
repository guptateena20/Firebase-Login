import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import {UserAuthContextProvider} from "./context/UserAuthContext"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserAuthContextProvider>
      <App />
  </UserAuthContextProvider>
    </BrowserRouter>
);
