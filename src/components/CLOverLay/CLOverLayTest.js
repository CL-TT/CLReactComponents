/*
 * @Author: CL
 * @Date: 2020-11-30 14:04:17
 * @LastEditTime: 2020-12-01 09:09:57
 * @Description: 测试遮罩层组件
 */

import React, { Component } from 'react';

import CLOverLay from './CLOverLay';

export class CLOverLayTest extends Component {
  state = {
    show: false,     //遮罩层是否展示
    isClickClose: true,     //点击非内容区域隐藏遮罩层
  };

  /**
   * 展示遮罩层
   */
  showModal = () => {
    this.setState({
      show: true
    })
  };

  closeModal = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <React.StrictMode>
        <button onClick={this.showModal}>展示遮罩层</button>

        <CLOverLay { ...this.state } closeModal={ this.closeModal }>
          <div style={ {color: 'red', background: 'white', padding: '20px'} }>我是遮罩层的自定义嵌入内容</div>
        </CLOverLay>
      </React.StrictMode>
    )
  }
}

export default CLOverLayTest


