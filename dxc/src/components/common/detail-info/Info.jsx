import React, { Component } from 'react'
import styles from './info.css'

export default class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.type
        }
    }
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.title}>{this.state.title}</div>
                <div className={styles.content}>
                    lalaallalala<br/>
                    hahaha
                </div>
                <div className={styles.more}>更多</div>
            </div>
        )
    }

}