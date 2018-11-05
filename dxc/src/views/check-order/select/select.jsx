import React, {Component} from 'react'
import styles from './select.css'

export default class Recommand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: '',
            endTime: '',
            chooseFlag: [true, false, false]
        };
    
        this.startChange = this.startChange.bind(this);
        this.endChange = this.endChange.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.selectIsPaid = this.selectIsPaid.bind(this);
        this.selectNoPaid = this.selectNoPaid.bind(this);
        this.someDay = this.someDay.bind(this);
    }

    startChange(event) {
        const time = event.target.value;
        this.props.startChange(time);
        this.setState({startTime: time});
        if (time==='') {
            this.props.startChange(this.props.startTime);
        }
    }

    endChange(event) {
        const time = event.target.value
        this.props.endChange(time);
        this.setState({endTime: time});
        if (time==='') {
            this.props.endChange(this.props.endTime);
        }
    }

    selectAll(){
        this.props.selectAll();
        this.setState({
            chooseFlag: [true, false, false],
            startTime: '',
            endTime: ''
        });
    }
    selectIsPaid(){
        this.props.selectIsPaid();
        this.setState({
            chooseFlag: [false, false, true]
        });
    }
    selectNoPaid(){
        this.props.selectNoPaid();
        this.setState({
            chooseFlag: [false, true, false]
        });
    }

    someDay(mDay) {
        const endTime = getDate(0);
        const startTime = getDate(mDay);
        this.props.bothChange(startTime, endTime);
        this.setState({
            startTime: startTime,
            endTime: endTime
        })
    }

    render() {
        const flag = this.state.chooseFlag;
        const choosenCSS = {paddingBottom:8, borderBottom:'1px solid #FF7F50', color:'#FF7F50', marginLeft:10}
        return(
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <span 
                    style={flag[0]? choosenCSS : {marginLeft:10}} 
                    onClick={this.selectAll}>全部订单</span>
                    <span 
                    style={flag[1]? choosenCSS : {marginLeft:10}}
                    onClick={this.selectNoPaid}>待支付订单</span>
                    <span 
                    style={flag[2]? choosenCSS : {marginLeft:10}}
                    onClick={this.selectIsPaid}>已支付订单</span>
                </div>
                <div style={{paddingTop:17, fontSize:15, color:"gray"}}>
                    <div style={{marginLeft:15, float:"left"}}>订单时间</div>
                    <form>
                        <input type="date" value={this.state.startTime} onChange={this.startChange} 
                        style={{marginLeft:10, marginTop:-3, float:"left"}} />
                        <input type="date" value={this.state.endTime} onChange={this.endChange}
                        style={{marginLeft:10, marginTop:-3, float:"left"}} />
                    </form>
                    <div style={{marginLeft:15, float:"left"}}
                    onClick={()=>this.someDay(7)}>最近七天</div>
                    <div style={{marginLeft:15, float:"left"}}
                    onClick={()=>this.someDay(30)}>最近一个月</div>
                    <div style={{marginLeft:15, float:"left"}}
                    onClick={()=>this.someDay(90)}>最近三个月</div>
                </div>
            </div>
        )
    }
}

function getDate(mDay) {
    let myDate = new Date();
    myDate.setDate(myDate.getDate()-mDay);    
    let year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    let month = myDate.getMonth()+1;       //获取当前月份(1-12)
    let day = myDate.getDate();        //获取当前日(1-31)
    //获取完整年月日
    let newDay = year + "-" + month + "-" + day;
    return newDay;
}