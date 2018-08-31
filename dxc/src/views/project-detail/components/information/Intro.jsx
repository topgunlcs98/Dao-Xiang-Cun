import React, { Component } from 'react'
import styles from './information.css'
import { Info } from 'components/common'
//引入高阶组件Info

class Intro extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                {/* 简介<br/>
                简介<br/>
                简介<br/>
                简介<br/> */}
                {
                   ' 根据参演实施方案，中方参演兵力采取铁路、公路和航空相结合的方式跨境投送。目前，参演兵力大部已在俄境内展开部署。铁路投送28个梯队，搭载3000余人，各型武器装备900余台，经满洲里投送至俄后贝加尔斯克、赤塔和斯捷皮站，卸载后摩托化机动至部署地域；固定翼飞机和直升机30架，分别转场至赤塔机场和斯捷皮机场。'
                }
            </div>
        )
    }
}
  Intro = Info(Intro, '简介', 80)
  export default Intro
