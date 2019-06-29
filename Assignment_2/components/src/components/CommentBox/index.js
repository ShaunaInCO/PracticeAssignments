import React, { Component } from 'react'
import Box from './Box'
import { thisTypeAnnotation } from '@babel/types';
class CommentBox extends Component{
    constructor(props) {
        super(props)
        this.localArray=[]
        this.newArray=[]
        this.state = {
        value:"",
        comments:[]
        }
      }
    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    handleComment=()=>{
       
        this.localArray = this.localArray.concat(this.displayComments(this.state.value)).reverse();
        this.setState({
            comments:this.localArray,
            value:""
        })

      }
      displayComments=(val)=>{
          return <Box name="TONY" comment={val}/>
      }
    render(){
        return(
            <div >
                <input type="text" value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} />
                <button onClick={this.handleComment} value="comment">Comment</button>
                {this.state.comments}
            </div>
        )
    }
}
export default CommentBox