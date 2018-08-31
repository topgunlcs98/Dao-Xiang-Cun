import React, { Component } from 'react'
import styles from './information.css'
import { Info } from 'components/common'
//引入高阶组件Info

class Service extends Component {
    render(){
        return(
        <div className={styles.wrapper}>
            "虎扑8月31日讯 火箭球员周琦今天在个人微博上发布一张自己在亚运会半
            决赛对阵中国台北中的扣篮照片（见新闻配图）。

          “还有一场，全力以赴！”周琦写道。

           本次比赛，周琦发挥依旧稳定，砍下22分16篮板3盖帽。最终中国队以86-63
           击败中国台北男篮挺进决赛，决赛中的对手将是实力强劲的伊朗队。

          2017-18赛季常规赛，周琦场均上场6.9分钟，能得到1.2分1.2篮板0.1助攻0.78盖帽"
        </div>
        )
    }
}
  Service = Info(Service,'商家服务',80)
  export default Service