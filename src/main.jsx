import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx';
import Profile from './components/Profile.jsx';

const router = createBrowserRouter([
  {path: "/pethub-website", element: <Navigate to="/pethub-website/home" />,},
  {path: "/pethub-website/home", element: <Home />,},
  {path: "/pethub-website/profile", element: <Profile />,},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
