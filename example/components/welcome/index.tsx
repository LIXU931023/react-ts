import React, { useEffect } from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import Worker from './answer.worker.ts';
import './index.less';

const Welcome: React.FC<RouteComponentProps> = () => {

  useEffect(() => {
    const worker = new Worker();
    worker.postMessage({
      question:
        100,
    });
    worker.onmessage = ({ data: { answer }}: { data: { answer: number } }) => {
      console.log(answer, 'answer');
    };
  }, [])
  return (
    <div>
      <header className='header'>header</header>
      Welcome
      <footer className='footer'>footer</footer>
    </div>
  )
}

export default Welcome;