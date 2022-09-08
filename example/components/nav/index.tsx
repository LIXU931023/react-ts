import React, { useEffect, useState, useRef } from 'react';
import './index.scss';

export default function Add () {
  const [count, setCount] = useState(0);
  let timer = useRef(0);
  useEffect(() => {
    timer.current = window.setInterval(() => {
      setCount((count) => {
        if (count === 7) {
          clearInterval(timer.current);
        }
        return count + 1
      })
    }, 1000)
    
  }, [])
  console.log(count, 8989);
  return (
    <div className='nav-container'>
      <ul>
        {
          [1,2,3,4,5,6,7, 8].map((item, index) => {
            if (index === 5) {
              return <li key={item}><button>这是一个按钮呀</button></li>
            } else {
              return (
                <li key={item} style={{ color: index === count ? 'red': '' }}>这是div{index}</li>
              )
            }
          })
        }
      </ul>
      
      这是nav组件这是nav组件这是nav组件这是nav组件这是nav组件
    </div>
  )
}