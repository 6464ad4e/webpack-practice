import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { classNames } from '@shared/lib/classNames';

import { useTranslation } from 'react-i18next';

export const AppRouter: FC = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <Routes>
        {Object.entries(routeConfig).map(([path, props]) => (
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
