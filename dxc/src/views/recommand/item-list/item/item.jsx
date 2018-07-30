import React, {Component} from 'react'
import styles from './item.css'
import defaultImage from '../../../../assets/pic5.jpeg'
import starOff from './star/1.png'
import starOn from './star/2.png'

export default class Item extends Component {
    constructor(props) {
        super(props)
        if (!isEmptyObject(props)) {
            // 设置信息
        } else {
            this.state={
                photo : defaultImage,
                title : 'test',
                address : 'test',
                gayTravel : 'test',
                comment : 'test',
                activity : 'test',
                price : '197',
                star : 4
            }
        }
        
    }

    star() {
        var num = this.state.star
        var num2 = 5-num
        var str = []
        for (; num>0; num--) {
            str.push(<img src={starOn} alt='star' class={styles.star}/>)
        }
        for (; num2>0; num2--) {
            str.push(<img src={starOff} alt='star' class={styles.star}/>)
        }
        return str
    }

    render() {
        return(
            <div class={styles.wrapper}>
                <div>
                    <img src={this.state.photo} alt="itemPhoto" class={styles.photo}/>
                    <div class={styles.info}>
                        <div class={styles.title}>{this.state.title}</div>
                        <div class={styles.otherInfo}>
                            地址：{this.state.address}<br/>
                            闺蜜游：{this.state.gayTravel}<br/>
                            点评：{this.state.comment}<br/>
                        </div>
                        <div class={styles.activ}>
                            <div class={styles.activWord}>活动</div>
                            <div class={styles.activInfo}>{this.state.activity}</div>
                        </div>
                    </div>
                    <div class={styles.priceInfo}>
                        <div class={styles.price}>{this.state.price}元/人</div>
                        <div class={styles.starTotal}>{this.star()}</div>
                    </div>
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
