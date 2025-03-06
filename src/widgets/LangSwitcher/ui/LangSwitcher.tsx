import { FC } from 'react';
import { Button, ThemeButton } from '@shared/ui';

import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({}) => {
  const { t, i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button theme={ThemeButton.CLEAR} onClick={changeLang}>
      {t('change_lang')}
    </Button>
  );
};
