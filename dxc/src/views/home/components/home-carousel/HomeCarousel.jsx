import React, { Component } from 'react'
import { Carousel } from 'antd';
import styles from './homeCarousel.css'

export default class HomeCarousel extends Component {
    render () {
        return(
  <Carousel autoplay>
    <div className={styles.wrapper}><div className={styles.pic1}></div></div>
    <div className={styles.wrapper}><div className={styles.pic2}></div></div>
    <div className={styles.wrapper}><div className={styles.pic3}></div></div>
    <div className={styles.wrapper}><div className={styles.pic4}></div></div>
  </Carousel>
        )
    }
} 