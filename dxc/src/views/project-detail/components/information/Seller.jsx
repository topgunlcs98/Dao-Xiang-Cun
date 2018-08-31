import React, { Component } from 'react'
import styles from './information.css'
import { Info } from 'components/common'
//引入高阶组件Info

class Seller extends Component {
    render(){
        return(
        <div className={styles.wrapper}>
            '韦斯特在声明中写道：“我很幸运能够实现我儿时的NBA梦想。在征战了15个赛季后，我现在做出了退役的决定。
            我很感激家人们、朋友们、教练们、队友们、球队和球迷们在我这段经历里给予我的支持。
            对于那些曾为我欢呼过、曾力挺过我、为我祈祷或有过赞美之词的人，我十分感激。相信自己，这无可厚非。恭喜！”

            值得一提的是，今天是美国时间大卫韦斯特的生日。

            韦斯特在2003年NBA选秀大会上首轮第18顺位被黄蜂（现鹈鹕）选中，曾效力过黄蜂（现鹈鹕）、步行者、马刺和勇士，
            职业生涯共出战1034场NBA常规赛，场均上场28.2分钟，得到13.5分6.4篮板2.2助攻0.74抢断0.82盖帽。'
            <span className={styles.classa + " " + styles.classb}>test</span>
        </div>
        )
    }
}
  Seller = Info(Seller,'商家信息',80)
  export default Seller
