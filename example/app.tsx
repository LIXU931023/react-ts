import React, { lazy } from 'react';
import { ConfigProvider as ConfigProviderV4 } from 'antd-V4';
const Footer = lazy(() => import ('@/components/footer'))
const Main = lazy(() => import ('@/components/main'))
const Nav = lazy(() => import ('@/components/nav'))
const Header = lazy(() => import ('@/components/header'))

import logo from './name.jpg';
// import './app.less';

export default function App () {

  ConfigProviderV4.config({
    prefixCls: 'antd-V4', // 4.13.0+
    // iconPrefixCls: 'anticon', // 4.17.0+
  });
  return (
      <ConfigProviderV4 prefixCls='antd-V4'>
        <div style={{ padding: 20, lineHeight: 3 }}>
          <Header />
          <Nav />
          <Main />
          <p style={{ margin: '0 auto', width: 100, height: 100 }}>
            <img src={logo} style={{ width: 100, height: 100 }} alt="" />
            <span>45454</span>
          </p>
          <Footer />
        </div>
    </ConfigProviderV4>

    
  )
}