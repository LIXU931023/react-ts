import React from 'react';
import type { RouteComponentProps } from 'react-router-dom'; 
import './index.scss';

const TableList: React.FC<RouteComponentProps> = (props) => {
  console.log(props, 'table-list')
  return (
    <div>
      table-list
    </div>
  )
}

export default TableList;
