import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import ReservationsPage from "./pages/Reservations";
import AboutPage from "./pages/Branch";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import Error404 from './pages/Error404.jsx';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      <Route path="*" element={<Error404/>} />
    </Routes>
  )
}

export default Routing
