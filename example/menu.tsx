import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { ILayout } from './layout';
import { formatMenu } from './utils';


const GlobalMenu: React.FC<MenuProps & ILayout> = (props) => {
  const items = formatMenu(props.innerRoutes);

  const handleClick:MenuProps['onClick'] = (e) => {
    props.history.push(e.key);
  }
  return (
    <Menu
      mode="inline"
      style={{ height: '100%' }}
      items={items}
      onClick={handleClick}
    />
  )
}

export default GlobalMenu;