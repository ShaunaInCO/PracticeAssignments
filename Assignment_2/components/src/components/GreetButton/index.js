import React, { Component } from 'react'

import MsgBody from './MsgBody'

import "./style.css"

class GreetButton extends Component{


    constructor(props) {
        super(props)
        this.state = {
        value:"",
        msg:"",
        hint:""
        }
      }


      handleChange = (e) => {
        this.setState({
          value: e.target.value
        });
        console.log(this.state.value)
      }

      handleClick = (e) => {
        this.setState({
          
          msg:"Hello "+this.state.value+",Have anice day",
          value:""
        });
        
      }
      handleFocus = (e) =>{
        this.setState({
          hint:"Username should be in A-Z a-z"
        });
      }

     
    
    render(){
        return(
          <>
            <input type="text" value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} />
             <p className="hint">{this.state.hint}</p> 
            <button onClick={this.handleClick}>GREET</button>
              <MsgBody name ={this.state.msg}/>  
        </>
        )
    }
}
export default GreetButton;

