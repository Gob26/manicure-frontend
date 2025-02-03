// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Когти</h1>
      <p>Добро пожаловать в Каталог салонов и частных мастеров маникюра!</p>
      <Link to="/cities">Перейти к списку городов</Link>
    </div>
  );
};

export default HomePage;
