import React, { Component } from 'react'
import styles from './diaryItem.css'
import defaultImage from '../../.././../assets/pic3.jpeg'
export default class DiaryItem extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <img src={defaultImage} alt="pic" className={styles.pic}/>
                </div>
                <div className={styles.rightWrapper}>
                    <div className={styles.title}>成都边的XXXXXXXXXX这春来三月，躲了一冬的阳光终于露脸了。春风和煦，阳光暖暖出门终于不用再感受彻骨的寒风，这个天气带</div>
                    <div className={styles.abstract}>这春来三月，躲了一冬的阳光终于露脸了。春风和煦，阳光暖暖，出门终于不用再感受彻骨的寒风，这个天气带
                    这春来三月，躲了一冬的阳光终于露脸了。春风和煦，阳光暖暖出门终于不用再感受彻骨的寒风，这个天气带</div>
                    <div className={styles.more}>更多</div>
                </div>
            </div>
        )
    }
}