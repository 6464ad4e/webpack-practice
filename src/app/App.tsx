import { Suspense } from 'react';
import { AppRouter } from '@app/providers/Routes';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import { useTheme } from '@shared/lib/useTheme/lib/useTheme';
import { classNames } from '@shared/lib/classNames';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div />}>
        <Navbar />
        <div className={classNames('content-page')}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
