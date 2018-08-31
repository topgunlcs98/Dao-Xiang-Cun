import React, {Component} from 'react'
import styles from './ProjectDetail.css'
import {Header, Footer}  from 'components/common'
import BriefIntro from './components/brief-intro/BriefIntro';
// import Comment from './components/comment/Comment'
import Seller from './components/information/Seller'
import Intro from './components/information/Intro'
import Service from './components/information/Service'
import Comment from './components/information/Comment'

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
                    <Seller />
                    <Intro />
                    <Service />
                    <Comment />
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}