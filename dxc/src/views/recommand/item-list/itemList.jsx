import React, {Component} from 'react'
import styles from './itemList.css'
import Item from './item/item'
import Choice from './choice/choice'

export default class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state={
            item : props.item,
            sortByStar : props.sortByStar,
            sortByPrice : props.sortByPrice,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.item
        })
    }

    itemCons(){
        var item = this.state.item
        var len = item.length
        var str = []
        for(let n=0; n<len; n++){
            str.push(<Item item={item[n]} key={item[n].key}/>)
        }
        return str
    }

    render() {
        return(
            <div class={styles.wrapper}>
                <div class={styles.choice}>
                    <Choice sortByStar={()=>{this.state.sortByStar()}}  sortByPrice={()=>{this.state.sortByPrice()}}/>
                </div>
                <br />
                <div>
                    {this.itemCons()}
                </div>
            </div>
        )
    }
}