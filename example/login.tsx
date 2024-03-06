import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import type { RouteComponentProps } from 'react-router-dom';
import Cookies from 'js-cookie'
import { IRouteItem } from './config/type';
import { LoginParams } from './service/type';
import { fetchLoginUser } from './store/user-slice';
import { useAppDispatch } from '@/hooks/redux';
import './login.scss';


interface ILoginProps extends RouteComponentProps {
  innerRoutes: IRouteItem[]
}

const Login: React.FC<ILoginProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const onFinish = async (values: LoginParams) => {
    try {
      setLoading(true);
      const callbackPromise = await dispatch(fetchLoginUser(values)).unwrap;
      const result = await callbackPromise();
      if (result.success) {
        Cookies.set('user-token', result.token);
        props.history.replace('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login-container'>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          requiredMark={false}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login;