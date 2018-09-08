import React, {Component} from 'react'
import styles from './item.css'
import defaultImage from 'assets/pic5.jpeg'
import starOff from './star/1.png'
import starOn from './star/2.png'

export default class Item extends Component {
    constructor(props) {
        super(props)
        if (!isEmptyObject(props)) {
            this.state = {
                item : props.item,
                changeNum : props.changeNum,
                changeFlag : props.changeFlag,
            }
        } else {
            this.state={
                photo : defaultImage,
                title : 'test',
                address : 'test',
                class : 'test',
                comment : 'test',
                activity : 'test',
                star : 4,
                price : '197',
                num : 1,
                flag : false,
                key : 0,
            }
        }
    }

    /**接收更改 */
    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.item
        })
    }

    /*转绝对路径*/
    photoUrl() {
        var str = []
        var path = this.state.item.photo
        str.push(<img src={require('../../../'+path)}  alt="itemPhoto" className={styles.photo}/>)
        return str
    }

    /*显示星级*/
    star() {
        var num = this.state.item.star
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

    /*加功能*/
    plus() {
        var item = this.state.item
        item.num++
        this.setState({
            item : item
        })
        this.state.changeNum(item.key, item.num)
    }

    /*减功能*/
    minus() {
        var item = this.state.item
        item.num--
        if (item.num === -1) {
            item.num = 0
        }
        this.setState({
            item : item
        })
        this.state.changeNum(item.key, item.num)
    }

    /**计算总价 */
    total() {
        var num = this.state.item.num
        var price = this.state.item.price
        return num*price
    }

    /**复选框 */
    checkBox() {
        var item = this.state.item
        if (item.flag === true) {
            item.flag = false
        }else{
            item.flag = true
        }
        this.setState({
            item : item
        })
        this.state.changeFlag(item.key, item.flag)
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <input type="checkbox" onClick={()=>{this.checkBox()}} checked={this.state.item.flag} className={styles.choose}/>
                <div>{this.photoUrl()}</div>
                <div className={styles.title}>{this.state.item.title}</div>
                <div className={styles.props}>
                    <p className={styles.prop}>地址：{this.state.item.address}</p>
                    <p className={styles.prop}>分类：{this.state.item.class}</p>
                    <p className={styles.prop}>点评：{this.state.item.comment}</p>
                    <p className={styles.prop}>活动：{this.state.item.activity}</p>
                    <p className={styles.stars}>{this.star()}</p>
                </div>
                <div className={styles.price}>￥{this.state.item.price}</div>
                <div className={styles.num}>
                    <div className={styles.op} onClick={()=>{this.minus()}}>-</div>
                    <div className={styles.number}>{this.state.item.num}</div>
                    <div className={styles.op} onClick={()=>{this.plus()}}>+</div>
                </div>
                <div className={styles.total}>￥{this.total()}</div>
            </div>
        )
    }
}

// 判断是否有数据
function isEmptyObject(obj) {   
    　　for (var key in obj){
    　　　　return false;//返回false，不为空对象
    　　}　　
    　　return true;//返回true，为空对象
    }

