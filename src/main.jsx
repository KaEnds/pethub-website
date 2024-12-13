import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx';
import HotelDetail from './pages/HotelDetail.jsx';
import Profile from './components/Profile.jsx';
import RoomsBooking from './pages/RoomsBooking.jsx';
import Payment from './pages/Payment.jsx';

const router = createBrowserRouter([
  {path: "/pethub-website", element: <Navigate to="/pethub-website/home" />,},
  {path: "/pethub-website/home", element: <Home />,},
  {path: "/pethub-website/home/:hotelName", element: <HotelDetail />,},
  {path: "/pethub-website/home/:hotelName/:roomTypeName", element: <RoomsBooking />,},
  {path: "/pethub-website/payment", element: <Payment />,},
  {path: "/pethub-website/profile", element: <Profile />,},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
