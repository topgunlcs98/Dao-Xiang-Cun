import React, {Component} from 'react'
import styles from './diary.css'
import DiaryItem from './diary-item/DiaryItem.jsx'

export default class Diary extends Component {
    constructor(props){
        super(props)
        this.state = {
            item:[{id:0},{id:1},{id:2},{id:3}]
        }
    }
    render(){
        let items = this.state.item.map(item=>(
            <DiaryItem />
        ))
        return(
            <div className={styles.wrapper}>
                {items}
            </div>
        )
    }
}