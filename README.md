基于react的验证码、密码、数字输入框<br />1、支持粘贴到输入框<br />2、复制内容在剪贴板上支持一建填入<br />3、可自定义覆盖原有样式，.input-wrapper  .input-item
<a name="ksHKn"></a>
### 安装
```
npm install pin-code-react --save
```

<a name="q15w9"></a>
### 使用
```jsx
import React, { useState, useCallback, ChangeEvent } from 'react';
import PinCode from 'pin-code-react';
import 'pin-code-react/dist/index.css';

export default function Add () {
  const [content, setContent] = useState('');
  const [value, setValue] = useState('');
  const getCode = useCallback((value: string) => {
    setContent(value);
  }, [])
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return (
    <div>
      <PinCode type="text" isImmediate onFinished={getCode} />
      <input type="text" onChange={onChange} value={value} />
      <div>{content}</div>
    </div>
  )
}
```
<a name="jklsj"></a>
### 参数
|  | 类型 | 描述 | 是否必传 |
| --- | --- | --- | --- |
| length | number | 输入框的个数 | 否，默认6 |
| type | text &#124; number &#124; password | 输入框类型 | 否，默认text |
| isImmediate | boolean | 输入完成后是否立即触发回调函数 | 否，默认true |
| onFinished | （）=> void &#124; Promise<any> | 输入完成后触发回调函数，或者手动获取输入内容 | 是 |

