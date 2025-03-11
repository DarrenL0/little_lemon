import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import MenuPage from "./pages/Menu";
import ReservationsPage from "./pages/Reservations";
import AboutPage from "./pages/Branch";
import ContactPage from "./pages/Contact";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  )
}

export default Routing
