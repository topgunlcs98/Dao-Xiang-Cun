import React, { Component } from 'react'
import styles from './talentAvatar.css'
import defaultAvatar from '../../.././../assets/avatar2.png'

export default class TalentAvatar extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <img src={defaultAvatar} className={styles.avatar} alt="avatar" />
                <span className={styles.talentName}>佟丽娅</span>
            </div>
        )
    }
}