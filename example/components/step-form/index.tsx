import React, { useState } from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import {
  Steps,
  Button,
  message,
  Form,
  Cascader,
  Input,
  Radio,
  DatePicker,
  InputNumber,
  Switch,
  TreeSelect,
  Select,
} from 'antd';
import './index.scss';

const BusyWorks: React.FC<RouteComponentProps> = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [submitData, setSubmitData] = useState('');

  const verifyName = [
    ['size', 'Input', 'Select'],
    ['TreeSelect', 'Cascader']
  ]

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: '步骤1',
    },
    {
      title: '步骤2',
    },
    {
      title: '步骤3',
    },
  ];

  const items = steps.map(item => ({ key: item.title, title: item.title }));

  const submitFormData = async() => {
    try {
      const values = await form.validateFields();
      message.success('Processing complete!')
      setSubmitData(JSON.stringify(values));
    } catch (error) {
      console.log(error);
    }
  }

  const nextStep = async () => {
    try {
      await form.validateFields(verifyName[current]);
      next();
    } catch (error) {
      console.log(error, 'error');
    }
  }
  return (
    <div>
      <Steps current={current} items={items} />
      <div className="steps-content">
        <Form
          form={form}
          initialValues={{ Switch: false }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <div hidden={current !== 0}>
            <Form.Item label="Form大小" name="size"
              rules={[{required: true, message: '请选择大小' }]}>
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="输入框" name="Input"
              rules={[{ required: true, message: '请输入' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="选择框" name="Select"
              rules={[{ required: true, message: '请选择' }]}>
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div hidden={current !== 1}>
            <Form.Item label="选择树" name="TreeSelect"
              rules={[{ required: true, message: '请选择树' }]}>
              <TreeSelect
                treeData={[
                  { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                ]}
              />
            </Form.Item>
            <Form.Item label="级联选择" name="Cascader"
              rules={[{ required: true, message: '请选择城市' }]}>
              <Cascader
                options={[
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
          </div>

          <div hidden={current !== 2}>
            <Form.Item label="日期选择" name="DatePicker"
              rules={[{ required: true, message: '请选择日期' }]}>
              <DatePicker />
            </Form.Item>
            <Form.Item label="数字输入框" name="InputNumber"
              rules={[{ required: true, message: '请输入' }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label="开关" name="Switch" valuePropName="checked"
              rules={[{ required: true, message: '请选择' }]}>
              <Switch />
            </Form.Item>
          </div>
        </Form>
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={nextStep}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={submitFormData}>
            完成
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
      </div>
      <div className='data-container'>
        {submitData}
      </div>
    </div>
  )
}

export default BusyWorks;