import React,{Component} from 'react'
import styles from './register.css'
import { NavLink } from 'react-router-dom'
import {Header, Footer} from 'components/common'


export default class Register extends Component{
    render(){
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.leftWrapper}>带你走出城市</div>
                    <div className={styles.rightWrapper}>
                        <div className={styles.title}>注册</div>
                        
                        <input className={styles.text} type="text" placeholder="输入账号" size="46" style={{height: 60}}/>
                        <input className={styles.text} type="text" placeholder="输入密码" size="46" style={{height: 60}}/>
                        
                        <div className={styles.forget}>忘记密码？</div>
                        
                        <div className={styles.buttonWrapper}>
                            <div className={styles.button}>
                                <div className={styles.buttonName}>登录</div>
                            </div>
                            <div className={styles.button2}>
                                <div className={styles.buttonName}><NavLink to='/register'><span style={{color: '#ffffff'}}>注册</span></NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}