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
                    address : '都江堰',
                    class : '亲子游',
                    comment : 'test',
                    activity : 'test',
                    price : '197',
                    star : 4,
                    key : 0,
                },
                {
                    photo : 'assets/pic4.jpeg',
                    title : 'test2',
                    address : '成都',
                    class : '亲子游',
                    comment : 'test2',
                    activity : 'test2',
                    price : '177',
                    star : 3,
                    key : 1,
                },
                {
                    photo : 'assets/pic3.jpeg',
                    title : 'test3',
                    address : '绵阳',
                    class : '周末出行',
                    comment : 'test3',
                    activity : 'test3',
                    price : '150',
                    star : 5,
                    key : 2,
                },
            ]
        }
    }

    componentWillMount(){
        var addressList = []
        var classList = []
        for (var n=0; n<this.state.item.length; n++) {
            var item = this.state.item[n]
            if (addressList.indexOf(item["address"])===-1){
                addressList.push(item["address"])
            }
            if (classList.indexOf(item["class"])===-1){
                classList.push(item["class"])
            }
        }
        this.setState ({
            addressList : addressList,
            classList : classList,
            itemBack : this.state.item,
        })
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

    selectionFunc(kind, tagList) {
        if (kind==="address") {
            this.setState({
                addressList : tagList
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        var newItem = []
        var newAddressList = nextState.addressList
        if (newAddressList.length===this.state.addressList.length){
            console.log(this.state.addressList.length)
            return 0
        }else{
            for (var n=0; n<this.state.itemBack.length; n++) {
                var item = this.state.itemBack[n]
                if (newAddressList.indexOf(item["address"])!==-1) {
                    newItem.push(item)
                }
            }
            nextState.item = newItem
            console.log(this.state.addressList.length)
        }
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.selectionWrapper}>
                    <Selection  
                    item={this.state.item} 
                    addressList={this.state.addressList}
                    classList={this.state.classList}
                    selectionFunc={(kind, tagList)=>{this.selectionFunc(kind, tagList)}}
                    />
                </div>
                <div className={styles.itemListWrapper}>
                    <ItemList 
                    item={this.state.item} 
                    sortByStar={()=>{this.sortByStar()}} 
                    sortByPrice={()=>{this.sortByPrice()}}
                    />
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