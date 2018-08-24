import React, { Component } from 'react'
import styles from './info.css'
import { Button } from 'antd'

export default class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.type,
            isFold: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({isFold:!this.state.isFold})
    }
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.title}>{this.state.title}</div>
                <div className={styles.content}
                    style={{height: this.state.isFold?80: 'auto'}}>
                    lalaallalala<br/>
                    hahaha<br/>
                    llll<br/>
                    kkk<br/>
                </div>
                <div className={styles.more}> <Button onClick={this.handleClick}>{this.state.isFold?'更多': '收起'}</Button></div>
            </div>
        )
    }

}