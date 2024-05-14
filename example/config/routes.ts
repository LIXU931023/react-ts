
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React, { lazy } from 'react';
import { IRouteItem } from './type';

const Login = lazy(() => import(/* webpackChunkName: "Logins" */ '../login'));
const StepForm = lazy(() => import(/* webpackChunkName: "step-form" */'../components/step-form'));
const TableList = lazy(() => import(/* webpackChunkName: "table-list" */ '../components/table-list'));
const ShowData = lazy(() => import(/* webpackChunkName: "show-data" */ '../components/show-data'));
const SellData = lazy(() => import(/* webpackChunkName: "sell-data" */ '../components/sell-data'));
const Welcome = lazy(() => import(/* webpackChunkName: "welcome" */ '../components/welcome'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ '../notfound'));
const Layout = lazy(() => import(/* webpackChunkName: 'layout' */ '../layout'));

export const routes:IRouteItem[] = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    icon: React.createElement(LaptopOutlined),
    component: Layout,
    routes: [
      {
        path: '/step-form',
        icon: React.createElement(LaptopOutlined),
        name: '步骤表单',
        component: StepForm,
      },
      {
        path: '/table-list',
        icon: React.createElement(NotificationOutlined),
        name: '表格',
        component: TableList,
      },
      {
        path: '/show-data',
        icon: React.createElement(UserOutlined),
        name: '展示数据',
        component: ShowData,
      },
      {
        path: '/sell-data',
        icon: React.createElement(LaptopOutlined),
        name: '销售数据',
        component: SellData,
      },
      {
        path: '/welcome',
        component: Welcome,
      },
      {
        path: '/*',
        component: NotFound,
      },
    ]
  },
  {
    path: '*',
    component: NotFound,
  },
]