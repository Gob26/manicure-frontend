// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from './routes/routes';
import { ThemeProvider } from './shared/context/ThemeContext';
import './shared/styles/index.css'; // Подключаем глобальные стили

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
