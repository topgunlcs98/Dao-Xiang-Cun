import React, { Component} from 'react'
import styles from './searchBar.css'
import { Icon } from 'antd'

const types =[{
    type:'theme',
    text:'主题'
},{
    type:'location',
    text:'地点'
},{
    type:'diary',
    text:'游记'
},{
    type:'talent',
    text:'达人'
}]

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            value:'',
            type:{type:'theme', text:'主题'}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        // this.handleTypeChange = this.handleTypeChange.bind(this)
    }

    handleChange= (e) => {
        this.setState({
            value : e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.value)
    }

    handleTypeChange = (type,text) =>{
        this.setState({
            type:{type:type,text:text}
        })
    }
    render(){
        return(
            <div className={styles.wrapper}>
                <div className={styles.selectWrapper}>
                    <div className={styles.btn}>{this.state.type.text}<Icon type="caret-down" style={{fontSize:20}}/></div>
                    <div className={styles.dropdn}>
                       <ul>
                           {/* <li>aaaa</li>
                           <li>b</li>
                           <li>c</li> */}
                            {
                               types.filter(item=> item.type!==this.state.type.type).map(({type, text})=>{
                                    return <li key={type} word={text} onClick={this.handleTypeChange.bind(this,type,text)}>{text}</li>
                               })
                            }
                       </ul>
                    </div>
                </div>
                <input type='text' className={styles.search} value={this.state.value} onChange={this.handleChange}/>
                <input type='submit' value='搜索' className={ styles.button} onClick={this.handleClick} />
            </div>
        )
    }
}