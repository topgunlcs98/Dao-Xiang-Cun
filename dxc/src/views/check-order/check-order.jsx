import React, {Component} from 'react'
import styles from './check-order.css'
import {Header,Footer}  from 'components/common'
import Select from './select/select'
import Items from './items/items'

export default class Recommand extends Component {
    constructor(props) {
        super(props);
        this.state={
            items : [
                {
                    photo : 'assets/pic5.jpeg',
                    title : 'test',
                    orderNum : 2016220204003,
                    orderTime : '2018-11-02  21:36',
                    startTime : '2018-12-01  00:00',
                    endTime : '2018-12-03  23:59',
                    price : '197',
                    activity : 'testtesttesttesttesttest',
                    isPaid : false,
                    detail : "/ProjectDetails"
                },
                {
                    photo : 'assets/pic4.jpeg',
                    title : 'test2',
                    orderNum : 2016220204004,
                    orderTime : '2018-10-21  18:36',
                    startTime : '2018-11-05  00:00',
                    endTime : '2018-11-06  23:59',
                    price : '177',
                    activity : 'test2test2test2test2',
                    isPaid : true,
                    detail : "/ProjectDetails"
                },
                {
                    photo : 'assets/pic3.jpeg',
                    title : 'test3',
                    orderNum : 2016220204005,
                    orderTime : '2018-08-27  18:36',
                    startTime : '2018-10-01  00:00',
                    endTime : '2018-10-03  23:59',
                    price : '176',
                    activity : 'test3test2test2test2',
                    isPaid : true,
                    detail : "/ProjectDetails"
                }
            ]
        };
        this.selectAll = this.selectAll.bind(this);
        this.selectIsPaid = this.selectIsPaid.bind(this);
        this.selectNoPaid = this.selectNoPaid.bind(this);
        this.startChange = this.startChange.bind(this);
        this.endChange = this.endChange.bind(this);
        this.bothChange = this.bothChange.bind(this);
    
    }

    componentWillMount() {
        let n = 0;
        for (let item of this.state.items) {
            item["key"] = n++;
        }
        let selectItems = JSON.parse(JSON.stringify(this.state.items));
        selectItems.sort((i1, i2)=>-dateComp(i1["orderTime"], i2["orderTime"]));
        const startTime = selectItems[selectItems.length-1]["orderTime"].split(' ')[0];
        const endTime = selectItems[0]["orderTime"].split(' ')[0];
        this.setState({
            selectItems : selectItems,
            startTime : startTime,
            endTime : endTime,
            startTimeBack : startTime,
            endTimeBack : endTime
        });
    }

    selectAll() {
        let selectItems = JSON.parse(JSON.stringify(this.state.items));
        this.setState({
            selectItems : selectItems
        });
    }
    selectIsPaid() {
        let selectItems = [];
        for (let item of this.state.items) {
            if (item["isPaid"]) {
                selectItems.push(JSON.parse(JSON.stringify(item)));
            }
        }
        this.setState({
            selectItems : selectItems
        });
    }
    selectNoPaid() {
        let selectItems = [];
        for (let item of this.state.items) {
            if (!item["isPaid"]) {
                selectItems.push(JSON.parse(JSON.stringify(item)));
            }
        }
        this.setState({
            selectItems : selectItems
        });
    }

    startChange(startTime) {
        console.log(startTime)
        let oldSelectItems = this.state.items;
        const endTime = this.state.endTime;
        let selectItems = oldSelectItems.filter((item)=>dateComp(startTime, item["orderTime"])!==1).filter((item)=>dateComp(endTime, item["orderTime"])!==-1);
        this.setState({
            selectItems : selectItems,
            startTime : startTime
        });
    }

    endChange(endTime) {
        let oldSelectItems = this.state.items;
        const startTime = this.state.startTime;
        let selectItems = oldSelectItems.filter((item)=>dateComp(startTime, item["orderTime"])!==1).filter((item)=>dateComp(endTime, item["orderTime"])!==-1);
        this.setState({
            selectItems : selectItems,
            endTime : endTime
        });
    }

    bothChange(startTime, endTime) {
        let oldSelectItems = this.state.items;
        let selectItems = oldSelectItems.filter((item)=>dateComp(startTime, item["orderTime"])!==1).filter((item)=>dateComp(endTime, item["orderTime"])!==-1);
        this.setState({
            selectItems : selectItems,
            startTime : startTime,
            endTime : endTime
        });
    }

    render() {
        const items = this.state.selectItems;
        const startTime = this.state.startTimeBack;
        const endTime = this.state.endTimeBack;
        return(
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={styles.selectWrapper}>
                    <Select 
                    startTime={startTime}
                    endTime={endTime}
                    selectAll={this.selectAll}
                    selectIsPaid={this.selectIsPaid}
                    selectNoPaid={this.selectNoPaid}
                    startChange={this.startChange}
                    endChange={this.endChange}
                    bothChange={this.bothChange}
                    />
                </div>
                <div className={styles.itemsWrapper}>
                    <Items 
                    items={items}
                    />
                </div>
                <div className={styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        )
    }
}

// d1先于d2，返回-1
function dateComp(d1, d2) {
    // eslint-disable-next-line radix
    let dl1 = d1.split('-').map((x)=>parseInt(x));
    // eslint-disable-next-line radix
    let dl2 = d2.split('-').map((x)=>parseInt(x));
    for (let n=0; n<3; n++) {
        if (dl1[n]<dl2[n]) {
            return -1;
        }else if (dl1[n]>dl2[n]) {
            return 1;
        }
    }
    return 0;
}