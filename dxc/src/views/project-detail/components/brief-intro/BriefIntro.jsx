import React,{Component} from 'react'
import styles from './briefIntro.css'
// import { NavLink } from 'react-router-dom'
import Image_5 from '../../../../assets/pic5.jpeg'
import Image_addrLogo from './logo/addrLogo.png'
import starOff from '../../../recommand/item-list/item/star/1.png'
import starOn from '../../../recommand/item-list/item/star/2.png'
import { Modal } from 'antd'
import { DatePicker } from 'antd'
import { InputNumber } from 'antd'

// const { MonthPicker, RangePicker } = DatePicker

export default class BriefIntro extends Component{
    constructor(props){
        super(props);
        this.state = {
            pic : Image_5,
            title : '安隅 情调书屋',
            star : 3,
            latestPrice : 197,
            oldPrice : '297元/人',
            address : '锦江区幸福梅林探路',
            visible: false,
            number: 1
        };
        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onNumberChange = this.onNumberChange.bind(this)
    }

    showModal= () => {
        this.setState({
            visible: true
        })
    }

    handleOk = () => {
        this.setState({
            visible: false
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    //预定日期
    onDateChange = (date,dateString) =>{
        console.log(date,dateString)
    }

    //预定人数
    onNumberChange = (val) =>{
        console.log(val)
        this.setState({number: val})
        
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
                        <div className={styles.latestPrice}>{this.state.latestPrice}元/人</div>
                        <div className={styles.oldPrice}>{this.state.oldPrice}</div>
                    </div>
                    <div className={styles.thirdWrapper}>
                        <div className={styles.address}>{this.state.address}</div>
                        <img src={Image_addrLogo} alt="pic" className={styles.logo} />
                         
                    </div>
                    <div className={styles.reserveButton}>
                        <div className={styles.reserve} onClick={this.showModal}>立即预定</div>
                        <Modal
                            title='立即预定'
                            visible={ this.state.visible }
                            onOk={ this.handleOk }
                            onCancel={this.handleCancel}
                        >
                             <p><span>预定时间:  </span><DatePicker onChange={this.onDateChange} placeholder="请选择预定时间" /></p>
                             <p><span>预定人数： </span><InputNumber size="large" min={1} max={100000} defaultValue={1} onChange={this.onNumberChange} /></p>
                             <p><div className={styles.totalPrice}><span style={{color:'#000000'}}>价格合计：</span>¥{this.state.number*this.state.latestPrice}</div></p>
                        </Modal> 
                    </div>
                </div>
            </div>
        );
    }
}