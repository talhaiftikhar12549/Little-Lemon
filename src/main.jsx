import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import App from './App.jsx'
import './index.css'
import { store } from './Redux/Store/store'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>,
)
