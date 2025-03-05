import { FC } from 'react';
import { AppLink } from '@shared/ui';
import { classNames } from '@shared/lib/classNames';

import cls from './NavBar.module.sass';
import { AppLinkTheme } from '@shared/ui/AppLink/AppLink';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
