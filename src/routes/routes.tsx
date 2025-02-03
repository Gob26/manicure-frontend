// src/routes/routes.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CityPage from '../pages/CityPage';
import HomePage from '../pages/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<HomePage />} />
        {/* Страница городов */}
        <Route path="/cities" element={<CityPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
