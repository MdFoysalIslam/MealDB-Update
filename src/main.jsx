import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Manu from './components/Manu/Manu.jsx';
import Order from './components/Order/Order.jsx';
import Offer from './components/Offer/Offer.jsx';
import Carier from './components/Carier/Carier.jsx';
import About from './components/About/About.jsx';
import Morning from './components/MorningFood/Morning.jsx';
import Dinner from './components/Dinner/Dinner.jsx';
import Lunch from './components/Lunch/Lunch.jsx';

const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>,        
        children: [
          {
            path: "/morning",
            element: <Morning></Morning>,
            loader: () => fetch('morning')
          },
          {
            path: "/lunch",
            element: <Lunch></Lunch>
            
          },
          {
            path: "/dinner",
            element: <Dinner></Dinner>
          }
        ]
      },
      {
        path: "/manu",
        element: <Manu></Manu>,
        
      },
      {
        path: "/order",
        element: <Order></Order>
      },
      {
        path: "/offer",
        element: <Offer></Offer>
      },
      {
        path: "/carier",
        element: <Carier></Carier>
      },
      {
        path: "/about",
        element: <About></About>
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
