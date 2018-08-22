import React,{Component} from 'react'
import styles from './briefIntro.css'
import { NavLink } from 'react-router-dom'
import Image_5 from '../../../../assets/pic5.jpeg'
import Image_addrLogo from './logo/addrLogo.png'
import starOff from '../../../recommand/item-list/item/star/1.png'
import starOn from '../../../recommand/item-list/item/star/2.png'

export default class BriefIntro extends Component{
    constructor(props){
        super(props);
        this.state = {
            pic : Image_5,
            title : '安隅 情调书屋',
            star : 3,
            latestPrice : '197元/人',
            oldPrice : '297元/人',
            address : '锦江区幸福梅林探路'
        };
    }

    star() {
        let on = this.state.star
        let off = 5-on
        let str = []
        for (; on>0; on--) {
            str.push(<img src={starOn} alt='star' class={styles.star}/>)
        }
        for (; off>0; off--) {
            str.push(<img src={starOff} alt='star' class={styles.star}/>)
        }
        return str
    }


    render(){
        return(
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <img src={Image_5} alt="pic" className={styles.pic}/>
                </div>
                <div className={styles.rightWrapper}>
                    <div className={styles.topWrapper}>
                        <div className={styles.title}>{this.state.title}</div>
                        <div className={styles.star}>{this.star()}</div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.secondWrapper}>
                        <div className={styles.latestPrice}>{this.state.latestPrice}</div>
                        <div className={styles.oldPrice}>{this.state.oldPrice}</div>
                    </div>
                    <div className={styles.thirdWrapper}>
                        <div className={styles.address}>{this.state.address}</div>
                        <img src={Image_addrLogo} alt="pic" className={styles.logo} />
                         
                    </div>
                    <div className={styles.reserveButton}>
                        <div className={styles.reserve}><NavLink to=''>立即预定</NavLink></div> 
                    </div>
                </div>
            </div>
        );
    }
}