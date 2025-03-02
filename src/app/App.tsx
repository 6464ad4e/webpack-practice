import React, { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from '@app/providers/ThemeProvider/lib/useTheme';
import { classNames } from '@shared/lib/classNames/classNames';

// * pages
import { MainPage } from '@pages/MainPage';
import { AboutPage } from '@pages/AboutPage';

import './styles/index.sass';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/counter">Counter</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
