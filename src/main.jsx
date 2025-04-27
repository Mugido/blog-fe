import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import SingleBlog from './pages/blogs/SingleBlog.jsx';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // This is the main component rendered at the root path
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />
      }
    ]
  },
  // You can add more routes here if needed
]);

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
);
