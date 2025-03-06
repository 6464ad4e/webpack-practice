import { FC } from 'react';
import { AppLink } from '@shared/ui';
import { AppLinkTheme } from '@shared/ui';
import { classNames } from '@shared/lib/classNames';

import cls from './NavBar.module.sass';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
  className?: string;
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
          {t('main')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
          {t('about')}
        </AppLink>
      </div>
    </div>
  );
};
