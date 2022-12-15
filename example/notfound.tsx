import React from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Button, Result } from 'antd';
import { IRouteItem } from './config/type';


interface ILoginProps extends RouteComponentProps {
  innerRoutes: IRouteItem[]
}

const NotFound: React.FC<ILoginProps> = () => {
  const history = useHistory();
  const backHome = () => {
    history.replace('/');
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在."
      extra={<Button type="primary" onClick={backHome}>返回首页</Button>}
    />
  )
}

export default NotFound;
