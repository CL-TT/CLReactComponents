/*
 * @Author: CL
 * @Date: 2020-11-26 17:26:26
 * @LastEditTime: 2020-11-27 09:00:49
 * @Description: 分页组件
 * @props:参数 {
 *   1. currentPage: 当前页
 *   2. totalSize: 总的数据量
 *   3. pageSize: 每一页显示多少条数据
 *   4. showPage: 一次显示多少页
 *   5. totalPage: 总页数(算出来的 => Math.ceil(totalSize / pageSize) )
 *   6. color: 字体颜色
 * }
 */

import React from 'react';
import './CLPaging.css';

export default function CLPaging(props) {
  const totalPage = getTotalPage(props);

  if(totalPage < 1){
    //如果总页数小于1，不显示组件
    return null;
  }

  const minNum = getMinPageNum(props);

  const maxNum = getMaxPageNum(minNum, props, totalPage);

  const main = getMainSpan(minNum, maxNum, props);

  return (
    <div className="paging-wrap">
      <span className={ props.currentPage === 1? 'disabled' : '' } onClick={ () => {toPage(1, props)} }>首页</span>
      <span className={ props.currentPage === 1? 'disabled' : '' } onClick={ () => {toPage(props.currentPage - 1 < 1? 1 : props.currentPage - 1, props)}}>上一页</span>
      { main }
      <span className={ props.currentPage === totalPage? 'disabled' : '' } onClick={ () => {toPage(props.currentPage + 1 > totalPage? totalPage : props.currentPage + 1, props)} }>下一页</span>
      <span className={ props.currentPage === totalPage? 'disabled' : '' } onClick={ () => {toPage(totalPage, props)}}>尾页</span>
      <span>{ props.currentPage } / { totalPage }</span>
    </div>
  )
}

/**
 * 得到总的页数
 */
function getTotalPage(props){
  const { totalSize, pageSize } = props;
  return Math.ceil(totalSize / pageSize);
}

/**
 * 得到每一次显示的最小页数
 * 当前页 - Math.floor((显示的页数 / 2))
 */
function getMinPageNum(props){
  const { currentPage, showPage } = props;
  const min = currentPage - Math.floor((showPage / 2));
  return min < 1? 1 : min;
}

/**
 * 得到每一次显示的最大页数
 * @param {*} min 最小页数值
 * @param {*} props 属性对象
 * @param {*} totalPage 属性对象
 */
function getMaxPageNum(min, props, totalPage){
  return min + props.showPage > totalPage? totalPage : min + props.showPage;
}

/**
 * 根据最小页数值和最大页数值得到主体结构
 */
function getMainSpan(min, max, props){
  let spanArr = [];

  for(let i = min; i <= max; i++){
    spanArr.push(<span style={ {color: props.color} } onClick={ () => {toPage(i, props)} } key={i} className={ props.currentPage === i? 'active' : '' }>{i}</span>);
  }

  return spanArr;
}

/**
 * 跳转到具体的页面
 * @param {*} page 跳转的页数
 * @param {*} props 传过来的属性
 * @param {*} totalPage 总的页数
 */
function toPage(page, props){
  if(page === props.currentPage){
    //如果跳转的页数已经和当前页相等了,就不做处理
    return;
  }

  //执行传进来的属性的方法
  props.toDetPage && props.toDetPage(page);
}
