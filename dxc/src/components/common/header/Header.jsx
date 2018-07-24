import React, { Component } from 'react'
import styles from './header.css'
import { Icon } from 'antd'

export default class Header extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <Icon type="car" style={{ fontSize: 24, color: '#ffffff' }} />
                    <span className={styles.leftTitle}>稻香村</span>
                    <span className={styles.subTitle}>带你走出城市</span>
                    <span className={styles.subTitle}><Icon type="pushpin-o" style={{ fontSize: 14, color: '#ffffff' }} />成都</span>
                </div>
                {/* <div className={styles.midWrapper}></div>
                <div className={styles.rightWrapper}></div> */}
            </div>
        )
    }
}