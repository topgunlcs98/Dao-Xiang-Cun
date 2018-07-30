import React, {Component} from 'react'
import styles from './recommand.css'
import {Header,Footer}  from 'components/common'
import Selection from './selection/selection'
import ItemList from './item-list/itemList'

export default class Recommand extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.selectionWrapper}>
                    <Selection />
                </div>
                <div className={styles.itemListWrapper}>
                    <ItemList />
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}