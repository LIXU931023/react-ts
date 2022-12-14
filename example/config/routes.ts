
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React, { lazy } from 'react';
import { IRouteItem } from './type';

export const routes:IRouteItem[] = [
  {
    path: '/login',
    component: lazy(() => import('../login'))
  },
  {
    path: '/',
    icon: React.createElement(LaptopOutlined),
    component: lazy(() => import('../layout')),
    routes: [
      {
        path: '/step-form',
        icon: React.createElement(LaptopOutlined),
        name: '步骤表单',
        component: lazy(() => import('../components/step-form'))
      },
      {
        path: '/table-list',
        icon: React.createElement(NotificationOutlined),
        name: '表格',
        component: lazy(() => import('../components/table-list'))
      },
      {
        path: '/show-data',
        icon: React.createElement(UserOutlined),
        name: '展示数据',
        component: lazy(() => import('../components/show-data'))
      },
      {
        path: '/sell-data',
        icon: React.createElement(LaptopOutlined),
        name: '销售数据',
        component: lazy(() => import('../components/sell-data'))
      },
      {
        path: '/welcome',
        component: lazy(() => import('../components/welcome'))
      },
      {
        path: '/*',
        component: lazy(() => import('../notfound'))
      },
    ]
  },
  {
    path: '*',
    component: lazy(() => import('../notfound'))
  },
]