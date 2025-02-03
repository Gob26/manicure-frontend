// src/shared/components/ThemeToggleButton.tsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ margin: '10px', padding: '8px 12px' }}>
      {theme === 'light' ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
    </button>
  );
};

export default ThemeToggleButton;
