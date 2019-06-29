import React, { Component } from 'react'
import "./style.css"
import { thisTypeAnnotation } from '@babel/types';
class CommentBox extends Component{
    
    currentTime=()=>{
        var time= new Date().getHours()>12 ? new Date().getHours()-12:new Date().getHours()
        console.log(time)
        return time+":"+new Date().getMinutes()
    }
    
    render(){
        return(
            <div className="container">
                <div className="comment">
                    <img src="/assets/cricket@2x.png" className="profile"></img>
                    <h3 className="name">{this.props.name}</h3>
                   
                </div>
                <div className="content">{this.props.comment}</div>
                <span className="time">{this.currentTime()}</span>
            </div>
            
        )
    }
}
export default CommentBox