import React, {Component} from 'react'
import styles from './itemList.css'
import Item from './item/item'
import Choice from './choice/choice'

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.sortByStar = this.sortByStar.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);
    }

    // 父类函数绑定
    sortByStar() {
        this.props.sortByStar();
    }
    sortByPrice() {
        this.props.sortByPrice();
    }

    // 列表渲染
    itemCons(){
        var item = this.props.item;
        var len = item.length;
        var str = [];
        for(let n=0; n<len; n++){
            str.push(<Item item={item[n]} key={item[n].key}/>);
        }
        return str;
    }

    render() {
        return(
            <div class={styles.wrapper}>
                <div class={styles.choice}>
                    <Choice sortByStar={this.sortByStar}  sortByPrice={this.sortByPrice}/>
                </div>
                <br />
                <div>
                    {this.itemCons()}
                </div>
            </div>
        )
    }
}