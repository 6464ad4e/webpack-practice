import { AppRouter } from '@app/providers/Routes';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { useTheme } from '@shared/lib/useTheme/lib/useTheme';
import { classNames } from '@shared/lib/classNames';

import './styles/index.sass';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <ThemeSwitcher />
      <AppRouter />
    </div>
  );
};
