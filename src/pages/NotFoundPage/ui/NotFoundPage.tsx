import { FC } from 'react';
import { classNames } from '@shared/lib/classNames';

import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
  const { t } = useTranslation('errors');

  return (
    <div className={classNames(cls.NotFoundPage)}>{t('not_found_page')}</div>
  );
};
