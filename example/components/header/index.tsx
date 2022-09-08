import React, { useState, useCallback, ChangeEvent } from 'react';
import PinCode from 'pin-code-react';
import 'pin-code-react/dist/index.css';
import './index.scss';

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
      <PinCode onFinished={getCode} />
      <input type="text" onChange={onChange} value={value} />
      <div>{content}</div>
    </div>
  )
}
