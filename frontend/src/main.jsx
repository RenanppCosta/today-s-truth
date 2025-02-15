import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Search } from './pages/Search';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import './index.css'
import Authentication from './pages/Authentication';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/search/:title",
        element: <Search />
      }
    ]
  },
  {
    path: "/auth",
    element: <Authentication />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
