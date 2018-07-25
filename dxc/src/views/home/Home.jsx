import React, {Component} from 'react'
import styles from './home.css'
import {Header,Footer}  from 'components/common'

export default class Home extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.picBoard}>
                    轮播图
                </div>
                <div className={styles.containtWrapper}>
                      内容
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}