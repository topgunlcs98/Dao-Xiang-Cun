import React, { Component } from 'react'
import styles from './travelDiary.css'
import { NavLink } from 'react-router-dom'
import DiaryItem from './diary-items/DiaryItem'
import TalentAvatar from './talent/TalentAvatar'

export default class TravelDiary extends Component {
    constructor(props) {
        super(props)
        this.state={
            content: [{id:0}, {id:1}, {id:2}, {id:3}, {id:4}, {id:5}],
            talent: [{id:0}, {id:1}, {id:2}, {id:3}]
        }
    }
    render () {
        const diaryItems = this.state.content.map(content =>(
            <DiaryItem id={content.id} />
        ))
        const talents = this.state.talent.map(talent =>(
            <TalentAvatar id={talent.id} />
        ))
        return(
            <div className={styles.wrapper}>
                <div className={styles.titleBar}>
                    <span className={styles.title}>达人游记</span>
                    <span className={styles.more}><NavLink to='/diary'><span style={{color: '#000000'}}>更多</span></NavLink></span>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.leftContainer}>
                    {diaryItems}
                    </div>
                    <div className={styles.rightContainer}>
                        <span className={styles.talentTitle}>旅游达人</span>
                        <div className={styles.talentWrapper}>
                        {talents}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}