import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Cart from './Components/Cart/Cart.jsx';
import ProductContainer from './Components/ProductContainer/ProductContainer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <ProductContainer></ProductContainer>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      }
    ],
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(




  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
