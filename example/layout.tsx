import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import type { RouteComponentProps } from 'react-router-dom';
import { Layout } from 'antd';
import useLogin from './use-login';
import GlobalMenu from './menu';
import { IRouteItem } from './config/type';

const HeaderContent = lazy(() => import (/* webpackChunkName: 'header' */'./components/head-content'))


const { Header, Footer, Sider, Content } = Layout;

export interface ILayout extends RouteComponentProps {
  innerRoutes: IRouteItem[];
}

const MyLayout: React.FC<ILayout> = (props) => {
  const { innerRoutes } = props;
  useLogin();
  useEffect(() => {
    if (props.location.pathname === '/') {
      props.history.push('/welcome')
    }
  }, [props.location.pathname])
  return (
    <Layout className='global-container'>
      <Header className='global-header'>
        <Suspense fallback={<div>loading...</div>}>
          <HeaderContent {...props} />
        </Suspense>
      </Header>
      <Layout className='global-center'>
        <Sider>
          <GlobalMenu {...props} />
        </Sider>
        <Content className='right-content'>
          {
          innerRoutes && innerRoutes.length > 0 && (
            <Switch>
              {
                innerRoutes.map((item, index) => {
                  const Component = item.component;
                  return (
                    <Route render={(prop) => (
                      <Suspense fallback={<div>loading...</div>}>
                        <Component innerRoutes={item.routes} key={String(index)} {...prop} />
                      </Suspense>
                    )} key={item.path}
                    path={item.path} />
                  )
                })
              }
            </Switch>
          )
        }
        </Content>
      </Layout>
      <Footer className='global-footer'>Footer</Footer>
    </Layout>
  )
}

export default MyLayout;
