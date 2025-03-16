import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from '../config/routesConfig';
import { classNames } from '@shared/lib/classNames';

import { PageLoader } from '@widgets/PageLoader';

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.entries(routesConfig).map(([path, props]) => (
          <Route
            {...props}
            key={path}
            element={
              <div className={classNames('page-wrapper')}>{props.element}</div>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
