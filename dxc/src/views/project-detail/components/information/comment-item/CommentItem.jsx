import React, { Component } from 'react'
import styles from './commentItem.css'
import avatar from 'assets/avatar1.png'
import staron from 'assets/staron.png'
import staroff from 'assets/staroff.png'
import pic1 from 'assets/pic4.jpeg'
import pic2 from 'assets/pic5.jpeg'
import pic3 from 'assets/pic6.jpeg'

export default class CommentItem extends Component {
    constructor(props){
        super(props)
        this.state={
            star:3,
            reply: "商家回复：感谢感谢！感谢您的认可与推荐！为您提供优质的服务与优质的菜品口味，是我们对每位顾客朋友应尽的责任与使命。"
            // reply:''
        }
    }
    star() {
        let on = this.state.star
        let off = 5-on
        let str = []
        for (; on>0; on--) {
            str.push(<img src={staron} alt='starImage' className={styles.starImage}/>)
        }
        for (; off>0; off--) {
            str.push(<img src={staroff} alt='starImage' className={styles.starImage}/>)
        }
        return str
    }
    render() {
       let reply=null
        if(this.state.reply){
             reply = <div className={styles.reply}>商家回复：{this.state.reply}</div>
        }
   
        return(
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <img src={avatar} alt='头像' className={styles.avatar}/>
                    <span className={styles.userName}>Tracy</span>
                </div>
                <div className={styles.rightWrapper}>
                    <div className={styles.star}>
                        {this.star()}
                        <div className={styles.tagBox}>
                            精选评论
                        </div>
                    </div>
                    <div className={styles.comments}>
                        {"好玩！食物很美味！好玩！食物很美味！好玩！食物很美味！好玩！食物很美味！好玩！食物很美味！好玩！食物很美味！"}
                    </div>
                    {reply}
                    <div className={styles.picWrapper}>
                        <img src={pic1} alt="pic" className={styles.picture} />
                        <img src={pic2} alt="pic" className={styles.picture} />
                        <img src={pic3} alt="pic" className={styles.picture} />
                    </div>
                </div>
            </div>
        )
    }
}