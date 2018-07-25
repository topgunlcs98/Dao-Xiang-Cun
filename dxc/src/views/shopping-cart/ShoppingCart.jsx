import React, {Component} from 'react'
import styles from './shoppingCart.css'
import {Header,Footer}  from 'components/common'

export default class ShoppingCart extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.containtWrapper}>
                      购物车
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}