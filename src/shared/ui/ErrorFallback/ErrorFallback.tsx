import { FC } from 'react';
import { Button } from '@shared/ui';
import { classNames } from '@shared/lib/classNames';

import cls from './ErrorFallback.module.scss';
import { useTranslation } from 'react-i18next';
import { FallbackProps } from 'react-error-boundary';

interface ErrorFallbackProps extends FallbackProps {
  className?: string;
}

export const ErrorFallback: FC<ErrorFallbackProps> = ({
  className,
  error,
  resetErrorBoundary,
}) => {
  const { t } = useTranslation(['general', 'errors']);

  return (
    <div className={classNames(cls.ErrorFallback, {}, [className])}>
      <p>{t('errors:something_went_wrong')}:</p>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>{t('general:try_again')}</Button>
    </div>
  );
};
