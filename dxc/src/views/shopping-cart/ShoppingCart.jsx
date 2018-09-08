import React, {Component} from 'react'
import styles from './shoppingCart.css'
import {Header,Footer}  from 'components/common'
import Item from './item/item'

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props)
        this.state={
            items : [
                {
                    photo : 'assets/pic5.jpeg',
                    title : 'test',
                    address : '都江堰',
                    class : '亲子游',
                    comment : 'test',
                    activity : 'test',
                    star : 4,
                    price : '197',
                    num : 1,
                    flag : false,
                    key : 0,
                },
                {
                    photo : 'assets/pic4.jpeg',
                    title : 'test2',
                    address : '成都',
                    class : '亲子游',
                    comment : 'test2',
                    activity : 'test2',
                    star : 3,
                    price : '177',
                    num : 1,
                    flag : false,
                    key : 1,
                },
            ],
            allChoose : false,
        }
    }

    /*按顺序显示列表中的物件*/
    itemCons(){
        var items = this.state.items
        var len = items.length
        var str = []
        for(let n=0; n<len; n++){
            str.push(<Item 
                item={items[n]} 
                changeNum={(key, newNum)=>{this.changeNum(key, newNum)}}
                changeFlag={(key, flag)=>{this.changeFlag(key, flag)}}
                />)
        }
        return str
    }

    /*回传后更改购买数量*/
    changeNum(key, newNum) {
        var items = this.state.items
        items[key].num = newNum
        this.setState({
            items : items
        })
    }

    /*回传后更改flag*/
    changeFlag(key, flag) {
        var items = this.state.items
        items[key].flag = flag
        this.setState({
            items : items
        })
    }

    /**全选动作 */
    chooseAll(){
        var flag = this.state.allChoose
        var items = this.state.items
        var len = items.length
        if (flag === true) {
            for(let n=0; n<len; n++){
                items[n].flag = false
            }
            this.setState({
                items : items,
                
            })
        }
        else{
            for(let n=0; n<len; n++){
                items[n].flag = true
            }
            this.setState({
                items : items,
                
            })
        }
    }

    /**计算件数 */
    totalNum(){
        var items = this.state.items
        var len = items.length
        var count = 0
        for(let n=0; n<len; n++){
            if (items[n].flag === true) {
                count += items[n].num
            }
        }
        return count
    }

    /**计算金额 */
    totalMoney(){
        var items = this.state.items
        var len = items.length
        var count = 0
        for(let n=0; n<len; n++){
            if (items[n].flag === true) {
                count += items[n].num * items[n].price
            }
        }
        return count
    }

    /**结算 */
    totalCount() {
        var total = this.totalMoney()
        window.alert(total);
    }

    /**更新state */
    componentWillUpdate(nextProps, nextState) {
        /*显示更改后的items[0].num*/
        console.log(nextState.items[0].num)

        /**更新全选信息 */
        var items = nextState.items
        var len = items.length
        var count = 0
        for(let n=0; n<len; n++){
            if (items[n].flag === true) {
                count++
            }
        }
        if (count === len) {
            nextState.allChoose = true
        }
        else {
            nextState.allChoose = false
        }
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.tag}>
                        <input type="checkbox" checked={this.state.allChoose} onClick={()=>{this.chooseAll()}} className={styles.choose}/>
                        <div className={styles.chooseWord}>全选</div>
                        <div className={styles.title}>商品信息</div>
                        <div className={styles.price}>单价</div>
                        <div className={styles.num}>数量</div>
                        <div className={styles.totalMoney}>金额</div>
                    </div>
                    <div className={styles.item}>
                        {this.itemCons()}
                    </div>
                    <div className={styles.total}>
                        <div className={styles.totalWordF}>已选商品</div>
                        <div className={styles.totalNum}>{this.totalNum()}</div>
                        <div className={styles.totalWord}>件</div>
                        <div className={styles.totalWordS}>合计：</div>
                        <div className={styles.totalYuan}>{this.totalMoney()}</div>
                        <div className={styles.totalWordT} onClick={()=>{this.totalCount()}}>结算</div>
                    </div>
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}