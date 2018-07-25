import React, {Component} from 'react'
import styles from './diary.css'
import {Header,Footer}  from 'components/common'

export default class Diary extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.containtWrapper}>
                      达人游记
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}