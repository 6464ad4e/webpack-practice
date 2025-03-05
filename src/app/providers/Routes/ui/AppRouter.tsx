import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '@widgets/NavBar/index';
import { routeConfig } from '../config/routeConfig';

export const AppRouter: FC = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.entries(routeConfig).map(([path, props]) => (
            <Route key={path} {...props} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
