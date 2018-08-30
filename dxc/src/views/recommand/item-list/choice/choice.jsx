import React, {Component} from 'react'
import styles from './choice.css'

export default class Choice extends Component {
    constructor(props) {
        super(props)
        this.state={
            sortByStar : props.sortByStar,
            sortByPrice : props.sortByPrice,
        }
    }

    clickStar() {
        this.state.sortByStar()
    }

    clickPrice() {
        this.state.sortByPrice()
    }

    render() {
        return(
            <div class={styles.word}>
                <button className={styles.button} onClick={(e)=>{this.clickStar(e)}}>
                    星级
                </button>
                <div style={{float: 'left'}}>
                    &emsp;
                </div>
                <button className={styles.button} onClick={(e)=>{this.clickPrice(e)}}>
                    价格
                    </button>
            </div>
        )
    }
}