import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FormApp from './FormPage'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { FormRouter } from './router/FormRouter'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FormRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
