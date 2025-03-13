import { FC, useState } from 'react';
import { Button } from '@shared/ui';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import { LangSwitcher } from '@widgets/LangSwitcher';
import { classNames } from '@shared/lib/classNames';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed })}>
      <Button
        className={classNames(cls['navbar-switcher'], {
          [cls['navbar-switcher-collapse']]: collapsed,
        })}
        onClick={onToggle}
      >
        {collapsed ? '→' : '←'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
