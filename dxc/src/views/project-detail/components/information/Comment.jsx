import React, {Component} from 'react'
import styles from './information.css'
import { Info } from 'components/common'
import CommentItem from './comment-item/CommentItem'

class Comment extends Component {
    constructor(props){
        super(props)
        this.state={
            comment:[{},{},{}]
        }
    }
    render(){
        return(
            <div className={styles.wrapper}>
                {/* <CommentItem /> */}
                {
                    this.state.comment.map(()=>{
                        return <CommentItem />
                    })
                }
            </div>
        )
    }
}

  Comment = Info(Comment, '用户评价', 300)
  export default Comment