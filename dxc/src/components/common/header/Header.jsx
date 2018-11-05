import React, { Component } from 'react'
import styles from './header.css'
import { Icon } from 'antd'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <Icon type="car" style={{ fontSize: 24, color: '#ffffff' }} />
                    <span className={styles.leftTitle}>稻香村</span>
                    <span className={styles.subTitle}>带你走出城市</span>
                    <span className={styles.subTitle}><Icon type="pushpin-o" style={{ fontSize: 18, color: '#ffffff' }} />{ '成都' }</span>
                </div>
                <div className={styles.midWrapper}>
                    <NavLink to="/" className={styles.navLink}><span className={styles.linkItem}>首页</span></NavLink>|
                    <NavLink to='/recommand' className={styles.navLink}><span className={styles.linkItem}>分类推荐</span></NavLink>|
                    <NavLink to='/diary' className={styles.navLink}><span className={styles.linkItem}>达人游记</span></NavLink>|
                    <NavLink to='/check-order' className={styles.navLink}><span className={styles.linkItem}>查看订单</span></NavLink>|
                    <NavLink to='/shoppingCart' className={styles.navLink}><span className={styles.linkItem}>购物车</span></NavLink>|
                    <NavLink to='/my' className={styles.navLink}><span className={styles.linkItem}>个人中心</span></NavLink>
                </div>
                <div className={styles.rightWrapper}>
                    <Icon type="user" style={{fontSize:24, color:'#000000'}} />
                    <span className={styles.logIn}><NavLink to='/logIn'><span style={{color:'#000000'}}>登录</span></NavLink></span>
                </div> 
            </div>
        )
    }
}