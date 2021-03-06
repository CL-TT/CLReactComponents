/*
 * @Author: CL
 * @Date: 2020-11-26 17:02:37
 * @LastEditTime: 2020-12-01 09:19:27
 * @Description: 主要用于测试组件
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// 分页组件
import CLPagingTest from './components/CLPaging/CLPagingTest';

//遮罩层组件
//import CLOverLayTest from './components/CLOverLay/CLOverLayTest';


ReactDOM.render(
  <React.StrictMode>
    <CLPagingTest></CLPagingTest>
  </React.StrictMode>,
  document.getElementById('root')
);

