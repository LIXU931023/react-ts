import React from "react";
import Cookies from "js-cookie";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import type { RouteComponentProps } from 'react-router-dom';
import type { MenuProps } from 'antd';
import './index.scss';


const HeaderContent: React.FC<RouteComponentProps> = () => {

  const handleMenuClick: MenuProps['onClick'] = e => {
    if (e.key === 'logout') {
      Cookies.remove('user-token');
      window.location.reload();
    }
  };

  const items: MenuProps['items'] = [
    {
      label: '退出',
      key: 'logout',
    },
  ];
  return (
    <div className="header-content">
      <img className="logo" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.lnstzy.cn%2Faoaodcom%2F2018-01%2F12%2F201801120640512624.jpg.h700.jpg&refer=http%3A%2F%2Fimage.lnstzy.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673413454&t=44666c990a0ab1ce417a4574eb8ea11e" alt="" />
      <Dropdown
      overlayStyle={{ width: 100 }}
      menu={{
          items,
          onClick: handleMenuClick,
        }}
      >
        <a onClick={e => e.preventDefault()}>
          <Space>
            我的昵称
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}

export default HeaderContent;
