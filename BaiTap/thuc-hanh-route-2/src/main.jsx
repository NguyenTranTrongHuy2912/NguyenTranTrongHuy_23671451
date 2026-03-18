import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import User from './pages/User.jsx';
import Guest from './pages/Guest.jsx';
import Products from './pages/Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "user", element: <User /> },
      { path: "guest", element: <Guest /> },
      { path: "product", element: <Products /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);