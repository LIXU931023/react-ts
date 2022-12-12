import React from 'react';
import type { RouteComponentProps } from 'react-router-dom'; 

const Welcome: React.FC<RouteComponentProps> = (props) => {
  console.log('Welcome', props)
  return (
    <div>
      Welcome
    </div>
  )
}

export default Welcome;