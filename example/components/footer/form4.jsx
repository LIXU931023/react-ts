import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Cascader, Select } from 'antd-V4';
import './index.less';

const FormV4 = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (value) => {
    console.log(value);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  // const options = [
  //   {
  //     label: 'Light',
  //     value: 'light',
  //     children: new Array(20).fill(null).map((_, index) => ({
  //       label: `Number ${index}`,
  //       value: index,
  //     })),
  //   },
  //   {
  //     label: 'Bamboo',
  //     value: 'bamboo',
  //     children: [
  //       {
  //         label: 'Little',
  //         value: 'little',
  //         children: [
  //           {
  //             label: 'Toy Fish',
  //             value: 'fish',
  //           },
  //           {
  //             label: 'Toy Cards',
  //             value: 'cards',
  //           },
  //           {
  //             label: 'Toy Bird',
  //             value: 'bird',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  return (
    <div>
<div className='container'>
<Cascader
      options={options}
      onChange={onChange}
      multiple
    />
</div>

    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>

      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Select style={{ width: 300 }}>
        <Select.Option value="111">11111</Select.Option>
        <Select.Option value="222">22222</Select.Option>
        <Select.Option value="333">33333</Select.Option>
      </Select>
    </div>
  );
};

export default FormV4;