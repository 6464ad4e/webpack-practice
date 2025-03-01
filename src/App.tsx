import React, { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

// * pages
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { CounterPageAsync } from './pages/CounterPage/CounterPage.async';

import './styles/index.sass';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Link to='/counter'>Counter</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/counter' element={<CounterPageAsync />} />
        </Routes>
      </Suspense>


      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}