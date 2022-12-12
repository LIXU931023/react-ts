import React, { useEffect } from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import GlobalMenu from './menu';
import HeaderContent from './components/head-content';
import useLogin from './use-login';
import { IRouteItem } from './config/type';


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
        <HeaderContent {...props} />
      </Header>
      <Layout className='global-center'>
        <Sider><GlobalMenu {...props} /></Sider>
        <Content className='right-content'>
          {
          innerRoutes && innerRoutes.length > 0 && (
            <Switch>
              {
                innerRoutes.map((item) => {
                  return (
                    <Route component={item.component} key={item.path}
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
