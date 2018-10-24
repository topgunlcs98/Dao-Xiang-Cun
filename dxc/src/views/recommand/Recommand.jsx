import React, {Component} from 'react'
import styles from './recommand.css'
import {Header,Footer}  from 'components/common'
import Selection from './selection/selection'
import ItemList from './item-list/itemList'

export default class Recommand extends Component {
    constructor(props) {
        super(props);
        this.state={
            // 商品元数据
            item : [
                {
                    photo : 'assets/pic5.jpeg',
                    title : 'test',
                    address : '都江堰',
                    class : '亲子游',
                    comment : 'test',
                    activity : 'test',
                    price : 197,
                    star : 4,
                    time : '一日游'
                },
                {
                    photo : 'assets/pic4.jpeg',
                    title : 'test2',
                    address : '成都',
                    class : '亲子游',
                    comment : 'test2',
                    activity : 'test2',
                    price : 170,
                    star : 3,
                    time : '二日游'
                },
                {
                    photo : 'assets/pic3.jpeg',
                    title : 'test3',
                    address : '绵阳',
                    class : '周末出行',
                    comment : 'test3',
                    activity : 'test3',
                    price : 140,
                    star : 5,
                    time : '二日游'
                }
            ],
            tagList : {
                address : [],
                class : [],
                time : [],
                priceKind : []
            },
            newItem : []
        };
        this.sortByStar = this.sortByStar.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);
        this.selectionFunc = this.selectionFunc.bind(this);
    }
    // 渲染前执行
    // 提取元数据中的目的地，游玩分类等列表
    componentWillMount(){
        let tagList = this.state.tagList;
        let key = 0;
        for (let item of this.state.item) {
            function insertList(kind){
                if (tagList[kind].indexOf(item[kind])===-1){
                    tagList[kind].push(item[kind]);
                }
            }
            insertList("address");
            insertList("class");
            insertList("time");
            item["key"] = key++;
            if (item["price"]<150) {
                item["priceKind"] = "150元以下";
            }else{
                item["priceKind"] = "150元以上";
            }
            insertList("priceKind");
        }
        this.setState ({
            tagList : tagList,
            // 所有操作都在newItem列表上进行
            newItem : this.state.item
        });
    }
    
    // 按星星排序
    sortByStar() {
        let list = this.state.newItem;
        list = list.sort(compare("star")).reverse();
        this.setState({
            newitem : list,
            change : true
        });
    }

    // 按价格排序
    sortByPrice() {
        let list = this.state.newItem;
        list = list.sort(compare("price"));
        this.setState({
            newitem : list,
            change : true
        });
    }

    // 更新选项列表
    selectionFunc(newTagList) {
        let item = this.state.item;
        // 只要有一个参数符合选项列表里的值，则选中并更新到newItem
        item = item.filter((item)=>{
            if (newTagList["address"].indexOf(item["address"]) !== -1
            && newTagList["class"].indexOf(item["class"]) !== -1
            && newTagList["time"].indexOf(item["time"]) !== -1
            && newTagList["priceKind"].indexOf(item["priceKind"]) !== -1){
                return true;
            }else{
                return false;
            }
        });
        this.setState({ 
            newItem : item 
        });
    }

    render() {
        const item = this.state.newItem;
        const tagList = this.state.tagList;
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.selectionWrapper}>
                    <Selection  
                    tagList={tagList}
                    selectionFunc={this.selectionFunc}
                    />
                </div>
                <div className={styles.itemListWrapper}>
                    <ItemList 
                    item={item} 
                    sortByStar={this.sortByStar} 
                    sortByPrice={this.sortByPrice}
                    />
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}

// 排序函数（有小到大）
var compare = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        return val1 - val2
    } 
}