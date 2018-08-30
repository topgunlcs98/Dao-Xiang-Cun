import React, {Component} from 'react'
import styles from './selection.css'

export default class Selection extends Component {
    constructor(props) {
        super(props)
        if (!isEmptyObject(props)) {
            this.state = props.item
        } else {
            this.state={
                
            }
        }
    }

    render() {
        return(
            <div class={styles.wrapper}>
                <div>
                    <div class={styles.title}>目的地</div>
                    <div class={styles.tag}>22</div>
                </div>
                <div>
                    <div class={styles.title}>游玩分类</div>
                    <div class={styles.tag}>22</div>
                </div>
                <div>
                    <div class={styles.title}>游玩时间</div>
                    <div class={styles.tag}>22</div>
                </div>
                <div>
                    <div class={styles.title}>人均价格</div>
                    <div class={styles.tag}>22</div>
                </div>
            </div>
        )
    }
}

function isEmptyObject(obj) {   
    　　for (var key in obj){
    　　　　return false;//返回false，不为空对象
    　　}　　
    　　return true;//返回true，为空对象
    }
