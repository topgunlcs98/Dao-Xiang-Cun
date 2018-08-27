import React, {Component} from 'react';
import styles from './home.css';
import {Header,Footer}  from 'components/common';
import TravelDiary from './diary/TravelDiary';
import ProductRecommand from './components/product-recommand/ProductRecommand';
import HomeCarousel from './components/home-carousel/HomeCarousel';
import SearchBar from './components/SearchBar/SearchBar'


export default class Home extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.picBoard}>
                    <HomeCarousel />
                </div>
                <div className={styles.containtWrapper}>
                    <SearchBar />
                    <ProductRecommand />
                    <TravelDiary />
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        );
    }
}