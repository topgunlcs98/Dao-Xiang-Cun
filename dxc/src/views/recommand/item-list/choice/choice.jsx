import React, {Component} from 'react'
import styles from './choice.css'

export default class Choice extends Component {
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

    render() {
        return(
            <div class={styles.word}>
                <button className={styles.button} onClick={this.sortByStar}>
                    星级
                </button>
                <div style={{float: 'left'}}>
                    &emsp;
                </div>
                <button className={styles.button} onClick={this.sortByPrice}>
                    价格
                </button>
            </div>
        )
    }
}