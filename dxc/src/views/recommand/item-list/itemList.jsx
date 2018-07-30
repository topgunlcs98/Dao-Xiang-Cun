import React, {Component} from 'react'
import styles from './itemList.css'
import Item from './item/item'

export default class ItemList extends Component {
    render() {
        return(
            <div class={styles.wrapper}>
                <div class={styles.choice}>
                    choice
                </div>
                <div>
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        )
    }
}