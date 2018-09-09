import React, { Component } from 'react'
import styles from './album.css'
import { Icon } from 'antd'
import pic1 from 'assets/pic4.jpeg'
import pic2 from 'assets/pic5.jpeg'
import pic3 from 'assets/pic6.jpeg'
import pic4 from 'assets/pic3.jpeg'

const pics=[pic1,pic2,pic3,pic4]
let pos1=0;
let pos2=1;
let pos3=2;

export default class Album extends Component {
    constructor(props){
        super(props)
        this.state={
            current :0,
            len:4
        }
        // this.handleClickLeft = this.handleClickLeft.bind(this)
    }

    handleClick=(direction )=>{
        // console.log('click')
        if(direction===1){
            this.setState({current: this.state.current-1})
        }
        if(direction===0){
            this.setState({current: this.state.current+1})
        }
        if(this.state.current<0){
            this.setState({current:this.state.len+this.state.current})
            // console.log('click')
        }
        if(this.state.current>=this.state.len){
            this.setState({current:this.state.current-this.state.len})
        }
    //    console.log('pos1:'+pos1+'pos2:'+pos2+'pos3:'+pos3)
        pos1=this.state.current;
        pos2=pos1+1;
        pos3=pos1+2;
        if(pos1<0){
            pos1=this.state.len+pos1
        }
        if(pos1>=this.state.len){
            pos1 = this.state.len-pos1
        }
        if(pos2<0){
            pos2=this.state.len+pos2
        }
        if(pos2>=this.state.len){
            pos2=pos2-this.state.len
        }
        if(pos3<0){
            pos3=this.state.len+pos3
        }
        if(pos3>=this.state.len){
            pos3=pos3-this.state.len
        }
    }
    render(){
        return(
            <div className={styles.wrapper}>
                <div className={styles.title}>实景相册</div>
                <div className={styles.content}>
                    <Icon type="caret-left" theme="outlined" 
                    onClick={this.handleClick.bind(this,0)} style={{ fontSize: '36px', color: '#ff8d1a' }} />
                    <img src={pics[pos1]} alt='picture1' className={styles.image} />
                    <img src={pics[pos2]} alt='picture2' className={styles.image}/>
                    <img src={pics[pos3]} alt='picture3' className={styles.image}/>
                    <Icon type="caret-right" theme="outlined" 
                     onClick={this.handleClick.bind(this,1)} style={{ fontSize: '36px', color: '#ff8d1a' }} />
                </div>
            </div>
        )
    }
}
