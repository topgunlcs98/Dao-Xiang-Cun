import React, { Component } from 'react'
import styles from './info.css'
import { Button } from 'antd'

export default (WrappedComponent, title='默认标题', height)=> {
    class Info extends Component{
    constructor(props) {
        super(props)
        this.state = {
            // title: props.type,
            isFold: true,
            // height:props.height,
            // component: props.component
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({isFold:!this.state.isFold})
    }
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}
                    style={{height: this.state.isFold?height: 'auto'}}>
                    <WrappedComponent />
                </div>
                <div className={styles.more}> <Button onClick={this.handleClick}>{this.state.isFold?'更多': '收起'}</Button></div>
            </div>
        )
    }
}
    return Info

}