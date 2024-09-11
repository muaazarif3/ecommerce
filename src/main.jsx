import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import {store} from './app/store.js'
import Cart from './Components/AddCart.jsx'
import Layout from './Layout.jsx'

let router = createBrowserRouter([
  {
    path: '/',
    element : <Layout />,
    children :[
     {
      path: "",
      element: <App />,
     },
      {
        path : 'cart',
        element : <Cart />
      },
    
    ]
  },

  
]


)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider  router={router}>
    
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
