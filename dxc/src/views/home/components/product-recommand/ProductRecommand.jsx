import React, { Component } from 'react'
import styles from './productrecommand.css'
import ProductItem from './product-item/ProductItem'

export default class ProductRecommand extends Component {
    constructor(props) {
        super(props);
        this.state={
            content: [{id:0}, {id:1}, {id:2}, {id:3}, {id:4}, {id:5},{id:6}]
        }
    }
    render () {
        const productitem = this.state.content.map(content =>(
            <ProductItem id={content.id} />
        ));
       
        return(
            <div className={styles.wrapper}>
                <div className={styles.titleBar}>
                    <span className={styles.title}>产品推荐</span>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.contentContainer}>
                    {productitem}
                    </div>
                </div>
            </div>
        );
    }
}