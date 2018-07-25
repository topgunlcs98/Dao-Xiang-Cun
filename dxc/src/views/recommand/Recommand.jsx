import React, {Component} from 'react'
import styles from './recommand.css'
import {Header,Footer}  from 'components/common'

export default class Recommand extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.containtWrapper}>
                      推荐内容
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}