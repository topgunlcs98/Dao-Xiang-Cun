import React, {Component} from 'react'
import styles from './selection.css'

export default class Selection extends Component {
    constructor(props) {
        super(props)
        if (!isEmptyObject(props)) {
            this.state = {
                item : props.item,
                addressList : props.addressList,
                classList : props.classList,
                selectionFunc : props.selectionFunc,
                tagList : []
            }
        } else {
            this.state={
                
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.item
        })
    }

    componentWillMount(){
        var flag = []
        for (var n=0; n<this.state.addressList.length; n++){
            flag.push(false)
        }
        this.setState({
            flag : flag,
        })
    }

    showTagList(kind, list) {
        let len = list.length
        var flag = this.state.flag
        var str = []
        for(let n=0; n<len; n++){
            if (flag[n]===false){
                str.push(<p className={styles.tagNoChosen} onClick={()=>{this.click(kind, list[n], n)}}>{list[n]}</p>)
            }else{
                str.push(<p className={styles.tagChosen} onClick={()=>{this.click(kind, list[n], n)}}>{list[n]}</p>)
            }
        }
        return str
    }

    click(kind, tag, n){
        var tagList = this.state.tagList
        var index = tagList.indexOf(tag)
        var flag = this.state.flag
        if (index===-1) {
            tagList.push(tag)
            flag[n] = true
            this.setState({
                flag : flag
            })
        }else{
            tagList.splice(index, 1)
            flag[n] = false
            this.setState({
                flag : flag
            })
        }
        if (tagList.length===0){
            tagList = this.state.addressList
        }
        this.state.selectionFunc(kind, tagList)
    }

    render() {
        return(
            <div class={styles.wrapper}>
                <div>
                    <div class={styles.title}>目的地</div>
                    <div>{this.showTagList("address", this.state.addressList)}</div>
                </div>
                <br />
                <div>
                    <div class={styles.title}>游玩分类</div>
                    <div class={styles.tag}>22</div>
                </div>
                <br />
                <div>
                    <div class={styles.title}>游玩时间</div>
                    <div class={styles.tag}>22</div>
                </div>
                <br />
                <div>
                    <div class={styles.title}>人均价格</div>
                    <div class={styles.tag}>22</div>
                </div>
            </div>
        )
    }
}

function isEmptyObject(obj) {   
    　　for (var key in obj){
    　　　　return false;//返回false，不为空对象
    　　}　　
    　　return true;//返回true，为空对象
    }
