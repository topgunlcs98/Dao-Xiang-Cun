import React,{ Component } from 'react'
import Diary from '../diary/Diary'
import Talent from '../talent/Talent'
import Write from '../write/Write'

export default class Card extends Component {
    render(){
        const type = this.props.type
        let show = null
        switch(type){
            case 'diary':
                show=(
                    <div><Diary /></div>
                )
                break
            case 'talent':
                show=(
                    <div><Talent /></div>
                )
                break
            case 'write':
                show=(
                    <div><Write /></div>
                )
                break
            default:
                break
        }
        return(
            <div>
                {show}
            </div>
        )

    }
}