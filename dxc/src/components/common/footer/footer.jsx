import React, { Component } from 'react'
import styles from './footer.css'
import { Icon } from 'antd'

export default class Footer extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <span className={styles.title}>
                        <Icon type="car" style={{fontSize:24, color:'#ffffff'}}/>&nbsp;&nbsp;&nbsp;
                        <span>稻香村</span>
                    </span>
                    <span className={styles.subTitle}>
                     服务热线：028-6666666(周一至周日 早9:30-晚6:30)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CEO邮箱：123456789@qq.com       
                    </span>
                    <span className={styles.subTitle}>
                    移动智能工作室 ©2018 稻香村. All right reserved. 川ICP备1234567890号-3川公网安备 1234567890号
                    </span>
                </div>
                <div classNmae={styles.rightWrapper}>
                    <span className={styles.subTitle}>
                    服务热线：028-6666666
                    </span>
                </div>
            </div>
        )
    }
}