import React, {Component} from 'react'
import styles from './recommand.css'
import {Header,Footer}  from 'components/common'
import Selection from './selection/selection'
import ItemList from './item-list/itemList'

export default class Recommand extends Component {
    constructor(props) {
        super(props)
        this.state={
            item : [
                {
                    photo : 'assets/pic5.jpeg',
                    title : 'test',
                    address : 'test',
                    gayTravel : 'test',
                    comment : 'test',
                    activity : 'test',
                    price : '197',
                    star : 4,
                    key : 0,
                },
                {
                    photo : 'assets/pic4.JPEG',
                    title : 'test2',
                    address : 'test2',
                    gayTravel : 'test2',
                    comment : 'test2',
                    activity : 'test2',
                    price : '177',
                    star : 3,
                    key : 1,
                },
                {
                    photo : 'assets/pic3.jpeg',
                    title : 'test3',
                    address : 'test3',
                    gayTravel : 'test3',
                    comment : 'test3',
                    activity : 'test3',
                    price : '150',
                    star : 5,
                    key : 2,
                },
            ]
        }
    }

    sortByStar() {
        var list = this.state.item
        list = list.sort(compare("star")).reverse()
        this.setState({
            item : list,
        })
        
    }

    sortByPrice() {
        var list = this.state.item
        list = list.sort(compare("price"))
        this.setState({
            item : list,
        })
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.selectionWrapper}>
                    <Selection  item={this.state.item}/>
                </div>
                <div className={styles.itemListWrapper}>
                    <ItemList item={this.state.item} sortByStar={()=>{this.sortByStar()}} sortByPrice={()=>{this.sortByPrice()}}/>
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}

var compare = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        return val1 - val2
    } 
}