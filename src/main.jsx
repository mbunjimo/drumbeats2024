import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css'; import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'animate.css';

import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Temp from './pages/Temp.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/aboutus",
    element: <AboutUs />,
    
  },
  {
    path: "/gallery",
    element: <Gallery />,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
