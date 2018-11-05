import React, {Component} from 'react'
import styles from './item.css'

export default class Recommand extends Component {
    /*转绝对路径*/
    photoUrl() {
        let path = this.props.item.photo
        let str = (<img src={require('../../../../'+path)}  alt="itemPhoto" className={styles.photo}/>)
        return str
    }

    render() {
        const item = this.props.item;
        const orderNum = item.orderNum;
        const orderTime = item.orderTime;
        const title = item.title;
        const startTime = item.startTime;
        const endTime = item.endTime;
        const price = item.price;
        const activity = item.activity;
        const isPaid = item.isPaid;
        const detail = item.detail;
        return(
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <span>订单号：{orderNum} | {orderTime}</span>
                </div>
                <div>
                    <div className={styles.firstBlock}>
                        <div>{this.photoUrl()}</div>
                        <div className={styles.content}>
                            <div style={{fontSize:20}}>{title}</div>
                            <div style={{marginTop:5}}>
                                <span className={styles.char}>始</span><span>&nbsp;{startTime}</span>
                            </div>
                            <div style={{marginTop:5}}>
                                <span className={styles.char} style={{backgroundColor:'#1874CD'}}>末</span><span>&nbsp;{endTime}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondBlock}>
                        <div style={{ marginLeft: 39, marginTop: 26, fontSize: 17}}>￥{price}</div>
                        <div className={styles.activity}>
                            <span className={styles.char}>惠</span>
                            <span>&nbsp;&nbsp;{activity}</span>
                        </div>
                    </div>
                    <div className={styles.thirdBlock}>
                        <div style={{ marginLeft: 33, marginTop: 28, fontSize: 14}}>{isPaid?"已支付订单":"待支付订单"}</div>
                    </div>
                    <div className={styles.fourthBlock}>
                        <div className={styles.href}>
                            <a href={detail}>查看详情</a>
                            <div>&nbsp;</div>
                            <a href="/shoppingCart">立即支付</a>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}