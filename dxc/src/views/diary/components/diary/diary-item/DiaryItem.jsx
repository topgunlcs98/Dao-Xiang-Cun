import React, { Component } from 'react'
import styles from './diaryItem.css'
import background from 'assets/pic5.jpeg'
import avatar from 'assets/avatar5.jpg'

export default class DiaryItem extends Component {
    render(){
        return(
            <div className={styles.wrapper}>
                <img src={background} alt='background' className={styles.background}/>
                <img src={avatar} alt='avatar' className={styles.avatar} />
                <div className={styles.title}>在世界的尽头相遇【成都卷】</div>
                <div className={styles.abstract}>2018年8月8日/3天/32图</div>
            </div>
        )
    }
}