// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>О компании</h3>
          <p style={textStyle}>
            Manicure Frontend — современное приложение для поиска мастеров и салонов красоты.
          </p>
        </div>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Ссылки</h3>
          <ul style={listStyle}>
            <li>
              <Link to="/" style={linkStyle}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/cities" style={linkStyle}>
                Города
              </Link>
            </li>
            <li>
              <Link to="/masters" style={linkStyle}>
                Мастера
              </Link>
            </li>
            <li>
              <Link to="/salons" style={linkStyle}>
                Салоны
              </Link>
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Контакты</h3>
          <p style={textStyle}>
            Email: info@manicure-frontend.com<br />
            Телефон: +7 (123) 456-78-90
          </p>
        </div>
      </div>
      <div style={bottomStyle}>
        <p style={copyStyle}>© 2025 Manicure Frontend. Все права защищены.</p>
      </div>
    </footer>
  );
};

// Стили для подвала с использованием CSS-переменных
const footerStyle: React.CSSProperties = {
  backgroundColor: 'var(--bg-color)',
  color: 'var(--text-color)',
  padding: '40px 20px',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  maxWidth: '1200px',
  margin: '0 auto',
};

const sectionStyle: React.CSSProperties = {
  flex: '1 1 300px',
  margin: '20px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '1.2em',
  marginBottom: '10px',
};

const textStyle: React.CSSProperties = {
  fontSize: '0.95em',
  lineHeight: 1.6,
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  color: 'var(--link-color)',
  textDecoration: 'none',
};

const bottomStyle: React.CSSProperties = {
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  paddingTop: '20px',
  marginTop: '20px',
};

const copyStyle: React.CSSProperties = {
  fontSize: '0.9em',
};

export default Footer;
