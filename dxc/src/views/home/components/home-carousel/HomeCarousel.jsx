import React, { Component } from 'react'
import { Carousel } from 'antd';
import styles from './homeCarousel.css'

export default class HomeCarousel extends Component {
    render () {
        return(
            <Carousel autoplay>
    <div className={styles.wrapper}><h3>1</h3></div>
    <div className={styles.wrapper}><h3>2</h3></div>
    <div className={styles.wrapper}><h3>3</h3></div>
    <div className={styles.wrapper}><h3>4</h3></div>
  </Carousel>
        )
    }
} 