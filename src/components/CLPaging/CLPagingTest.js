/*
 * @Author: CL
 * @Date: 2020-11-26 17:26:58
 * @LastEditTime: 2020-11-26 18:30:34
 * @Description: 测试分页组件
 */


import React, { Component } from 'react';

import CLPaging from './CLPaging';

export class CLPagingTest extends Component {
  //状态数据
  state = {
    currentPage: 1,
    totalSize: 38,
    pageSize: 6,
    showPage: 5,
    color: '#762'
  }

  toDetPage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <React.StrictMode>
        <CLPaging { ...this.state } toDetPage={ this.toDetPage }/>
      </React.StrictMode>
    )
  }
}

export default CLPagingTest

