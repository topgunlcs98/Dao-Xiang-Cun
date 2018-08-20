import React, {Component} from 'react'
import styles from './ProjectDetail.css'
import {Header,Footer}  from 'components/common'
import BriefIntro from './components/brief-intro/BriefIntro';

export default class ProjectDetail extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.containtWrapper}>
                    <BriefIntro />
                    <div>轮播图</div>
                    <div>信息</div>
                    <div>用户点评</div>
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}