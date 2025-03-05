import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@shared/lib/classNames';

import cls from './AppLink.module.sass';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  children,
  className,
  theme = AppLinkTheme.PRIMARY,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
