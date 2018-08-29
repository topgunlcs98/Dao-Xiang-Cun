import React, { Component } from 'react'
import styles from './diary.css'
import { Header,Footer }  from 'components/common'
import { Menu } from 'antd'
import Card  from './components/card/Card'

// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

export default class Diary extends Component {
    constructor(props){
        super(props)
        this.state = {
            current: "diary"
        }
        this.handleClick = this.handleClick.bind(this) 
    }

    handleClick = (e) => {
        this.setState({current: e.key})
    }
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.containtWrapper}>
                      <div className={styles.topMenu}>
                          <Menu
                          selectedKeys={[this.state.current]}
                          mode="horizontal"
                          style={{padding: "20 0 0 0", borderBottom: "2px"}}
                          >
                            <Menu.Item key="diary" onClick = {this.handleClick}>
                               <span className={styles.option}>发现好游记</span>
                            </Menu.Item>
                            <Menu.Item key="talent" onClick = {this.handleClick}>
                               <span className={styles.option}>周边游达人</span>
                            </Menu.Item>
                            <Menu.Item key="write" onClick = {this.handleClick}>
                               <span className={styles.option}>我要写游记</span>
                            </Menu.Item>
                        </Menu>
                      </div>
                      <div className={styles.card}>
                        <Card type={this.state.current} />
                      </div>
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}