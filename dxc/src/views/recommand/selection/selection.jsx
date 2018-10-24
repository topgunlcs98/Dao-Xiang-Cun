import React, {Component} from 'react'
import styles from './selection.css'

export default class Selection extends Component {
    constructor(props) {
        super(props);
        this.state={
            isCh : {
                address : [],
                class : [],
                time : [],
                priceKind : []
            },  // 是否选中 标记列表
            tagList : {},
            newTagList : {}
        };
    }

    componentWillMount(){
        let isCh = this.state.isCh;
        let tagList = this.props.tagList;
        // tagList对应isCh的每一位都设为false（默认）
        for (let index in tagList) {
            tagList[index].forEach(()=>{isCh[index].push(false)});
        }
        this.setState({
            isCh : isCh,
            tagList : tagList,
            newTagList : tagList
        })
    }

    click(kind, n){
        const tagList = JSON.parse(JSON.stringify(this.state.tagList[kind]));
        let newTagListL = JSON.parse(JSON.stringify(this.state.newTagList));
        let newTagList = newTagListL[kind];
        let isChL = this.state.isCh;
        let isCh = isChL[kind];

        // 检测是否全非选，若是，则全选
        const len = isCh.length;
        let num = 0;
        for (;num<len;) {
            if (isCh[num]!==false){
                break;
            }
            num += 1;
        }
        if (num===len) {
            newTagList = [];
        }
        if (isCh[n]===false) {
            isCh[n] = true;
            newTagList.push(tagList[n]);
        }else{
            isCh[n] = false;
            newTagList.splice(newTagList.indexOf(tagList[n]), 1);
        }
        if (newTagList.length===0){
            newTagList = tagList;
        }
        newTagListL[kind] = newTagList;
        this.props.selectionFunc(newTagListL);
        this.setState({
            isCh : isChL,
            newTagList : newTagListL
        });
        console.log(newTagListL, isChL)
    }

    showTagList(kind) {
        let list = this.state.tagList[kind];
        let isCh = this.state.isCh[kind];
        let len = list.length;
        let str = [];
        for(let n=0; n<len; n++){
            if (isCh[n]===false){
                str.push(<span className={styles.tagNoChosen} onClick={()=>{this.click(kind, n)}}>{list[n]}&nbsp;</span>);
            }else{
                str.push(<span className={styles.tagChosen} onClick={()=>{this.click(kind, n)}}>{list[n]}&nbsp;</span>);
            }
        }
        return str;
    }

    // 
    render() {
        return(
            <div class={styles.wrapper}>
                <div>
                    <span class={styles.title}>目的地</span>
                    <span style={{marginLeft:20}}>{this.showTagList("address")}</span>
                </div>
                <br />
                <div>
                    <span class={styles.title}>游玩分类&nbsp;</span>
                    <span>{this.showTagList("class")}</span>
                </div>
                <br />
                <div>
                    <span class={styles.title}>游玩时间&nbsp;</span>
                    <span>{this.showTagList("time")}</span>
                </div>
                <br />
                <div>
                    <span class={styles.title}>人均价格&nbsp;</span>
                    <span>{this.showTagList("priceKind")}</span>
                </div>
            </div>
        )
    }
}
