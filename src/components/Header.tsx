// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../shared/components/ThemeToggleButton';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>M</h1>
        </Link>
      </div>
      <nav style={navStyle}>
        <Link to="/cities" style={linkStyle}>
          Города
        </Link>
        <Link to="/masters" style={linkStyle}>
          Мастера
        </Link>
        <Link to="/salons" style={linkStyle}>
          Салоны
        </Link>
      </nav>
      <div style={toggleStyle}>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

// Пример встроенных стилей (вы можете заменить их на свои или использовать CSS-классы)
const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  borderBottom: '1px solid #ccc',
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.5em',
  fontWeight: 'bold',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '1em',
};

const toggleStyle: React.CSSProperties = {
  // Можно добавить отступы или дополнительные стили
};

export default Header;
