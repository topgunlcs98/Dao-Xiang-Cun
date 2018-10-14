import React, { Component } from 'react'
import styles from './retrievePassword.css'
import { NavLink } from 'react-router-dom'
import { Header, Footer } from 'components/common'

export default class RetrievePassword extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.centerWrapper}>
                        <div className={styles.title}>密码找回</div>
                        <input className={styles.text} type="text" placeholder="输入账号" size="46" />
                        <input className={styles.text} type="text" placeholder="输入手机号" size="11" />
                        <div className={styles.verify}>
                            <div className><input className={styles.verifyText} type="text" placeholder="输入验证码" size="6" /></div>
                            <div className={styles.buttonVerify}>
                                <div className={styles.buttonName}><span style={{color:'#ffffff'}}>GEAG</span></div>
                            </div>
                        </div>
                        <input className={styles.text} type="password" placeholder="输入密码" size="46" />
                        <input className={styles.text} type="password" placeholder="确认密码" size="46" />
                        <div className={styles.buttonWrapper}> 
                            <div className={styles.button1}>
                                <div className={styles.buttonName}><NavLink to='/log-in'><span style={{color:'#ffffff'}}>登录</span></NavLink></div>
                            </div>
                            <div className={styles.button2}>
                                <div className={styles.buttonName}><NavLink to="/register"><span style={{color:'#ffffff'}}>注册</span></NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        );
    }
}