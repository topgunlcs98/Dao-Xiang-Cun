import React, {Component} from 'react'
import styles from './ProjectDetail.css'
import {Header, Footer, Info}  from 'components/common'

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
                    <Info type={'商家信息'} />
                    <Info type={'简介'} />
                    <Info type={'商家服务'} />
                    <div>用户点评</div>
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}