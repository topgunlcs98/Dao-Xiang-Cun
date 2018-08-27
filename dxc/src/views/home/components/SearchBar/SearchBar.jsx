import React, { Component} from 'react'
import styles from './searchBar.css'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            value:'输入搜索地点'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange= (e) => {
        this.setState({
            value : e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.value)
    }

    render(){
        return(
            <div className={styles.wrapper}>
                <input type='text' className={styles.search} value={this.state.value} onChange={this.handleChange}/>
                <input type='submit' value='搜索' className={ styles.button} onClick={this.handleClick} />
            </div>
        )
    }
}