import React, { CSSProperties } from 'react';
import './index.scss';

export default function Footers () {
  const dpr = window.devicePixelRatio;
  const value = 1 / dpr;
  const styleObj:CSSProperties = {
    color: 'blue',
  }
  return (
    <div>
      footer组件
      <div style={{ borderBottom: '1px solid red', margin: dpr < 2 ? 10 : 20, transform: `scaleY(${value})`, ...styleObj }} />
      {
        Array(dpr).fill(0).map((i, index) => (
          <div key={index}>{1111}</div>
        ))
      }
      {/* <div className='box' tabIndex={-1} onBlur={onDivBlur}></div>
      <ul onMouseDown={onChange}>
        <li>1111</li>
        <li>2222</li>
        <li>3333</li>
      </ul> */}

        {/* <select name="" id="">
          <option value="111">1111</option>
            <option value="222">2222</option>
            <option value="333">3333</option>
            <optgroup label='yizu'>
              <option value="4444">4444</option>
            </optgroup>
          
        </select> */}

<div
      tabIndex={1}
      onFocus={(e) => {
        if (e.currentTarget === e.target) {
          console.log('focused self');
        } else {
          console.log('focused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus entered self');
        }
      }}
      onBlur={(e) => {
        if (e.currentTarget === e.target) {
          console.log('unfocused self');
        } else {
          console.log('unfocused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus left self');
        }
      }}
    >
      <input id="1" />
      <input id="2" />
    </div>
    </div>
  )
}