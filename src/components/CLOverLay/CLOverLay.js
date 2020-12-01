/*
 * @Author: CL
 * @Date: 2020-11-30 14:03:57
 * @LastEditTime: 2020-12-01 09:08:58
 * @Description: 遮罩层组件
 * @props: 参数{
 *   1. show: 是否展示遮罩层， 默认为false
 *   2. bgColor: 遮罩层的背景颜色
 *   3. opacity: 透明度
 *   4. isclickClose: 点击非内容区域是否可以关闭遮罩层, 默认是true
 * }
 */

import React from 'react';

import propTypes from 'prop-types';

import './CLOverLay.css';

//属性默认值
CLOverLay.defaultProps = {
  bgColor: 'black',
  opacity: 0.7,
  show: false,
  isClickClose: true
}

//属性值校验
CLOverLay.propTypes = {
  show: propTypes.bool,
  bgColor: propTypes.string,
  opacity: propTypes.number,
  isClickClose: propTypes.bool
}

export default function CLOverLay(props) {
  return (
    props.show?

    <div onClick={ (e) => {closeModal(e, props)}}  className="modal" style={ {background: props.bgColor, opacity: props.opacity} }>
      <div className="modal-center">
        { props.children }
      </div>
    </div>
    :
    null
    
  )
}

/**
 * 关闭遮罩层
 * @param {*} props 
 */
function closeModal(e, props){
  if(e.target.className !== 'modal') return;
  if(!props.isClickClose) return;

  props.closeModal && props.closeModal();
}


