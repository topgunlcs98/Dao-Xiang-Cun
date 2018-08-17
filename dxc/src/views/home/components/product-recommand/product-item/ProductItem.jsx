import React, { Component } from 'react'
import styles from './productitem.css'
import Image_1 from '../../../../../assets/pic4.JPEG'
export default class ProductItem extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <img src={Image_1} alt="pic" className={styles.pic}/>
                </div>
                <div className={styles.rightWrapper}>
                    <div className={styles.placeName}>史莱伯花园</div>
                    <div className={styles.address}>三圣乡</div>
                    <div className={styles.centerWrapper}>
                        <div className={styles.tag}>童话 亲子 野炊 </div>
                    </div>
                    <div className={styles.price}>143/人</div>
                </div>
            </div>
        )
    }
}