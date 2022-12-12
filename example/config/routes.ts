
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
        path: '/busy-work',
        icon: React.createElement(LaptopOutlined),
        name: '努力工作',
        component: lazy(() => import('../components/busy-work'))
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
        // exact: true,
        component: lazy(() => import('../components/show-data'))
      },
      {
        path: '/sell-data',
        icon: React.createElement(LaptopOutlined),
        name: '销售数据',
        // exact: true,
        component: lazy(() => import('../components/sell-data'))
      },
      {
        path: '/welcome',
        // exact: true,
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