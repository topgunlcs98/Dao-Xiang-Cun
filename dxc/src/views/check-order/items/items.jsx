import React, {Component} from 'react'
import Item from './item/item'

export default class Recommand extends Component {
    itemCons(){
        let items = this.props.items;
        let len = items.length;
        let str = [];
        for(let n=0; n<len; n++){
            str.push(<Item item={items[n]} />);
        }
        return str;
    }
    render() {
        return(
            <div>
                {this.itemCons()}
            </div>
        )
    }
}