import { FC } from 'react';
import { Button, ThemeButton } from '@shared/ui';
import { classNames } from '@shared/lib/classNames';
import { useTheme } from '@shared/lib/useTheme';

import ThemeIcon from '@shared/assets/icons/theme-light-icon.svg';

import cls from './ThemeSwitcher.module.sass';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      <ThemeIcon
        className={classNames(cls.ThemeSwitcherIcon, {}, [className])}
      />
    </Button>
  );
};
