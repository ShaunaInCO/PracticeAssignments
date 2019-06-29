import React, { Component } from 'react'

class RadioButtons extends Component{
    constructor(props) {
        super(props)
        this.state = {
        value:"",
        msg:""
        }
      }

      handleRadioClick = (e) =>{
          this.setState({
              value:e.target.value
          })
      }
      radioClick =(e)=>{
        console.log(this.state.msg)
        this.setState({
            msg:"your favourite is Dessert is "+this.state.value.toUpperCase()
        });
        
      }
    render(){
        return(
            <div>
              
              <h3>What is your favourite Ice cream</h3>
              <input type="radio" 
                    value="Vanilla" 
                    onChange={this.handleRadioClick} 
                    checked={this.state.value === "Vanilla"}/>Vanilla
                    <br></br>
              <input type="radio"
                     value="Butterscotch"
                     onChange={this.handleRadioClick}
                      checked={this.state.value === "Butterscotch"}/>Butterscotch
                      <br></br>
              <input type="radio"
                     value="Chocolate"
                    onChange={this.handleRadioClick}
                    checked={this.state.value === "Chocolate"}/>Chocolate
                    <br></br>
              <input type="radio"
                     value="Strawberry"
                      onChange={this.handleRadioClick}
                       checked={this.state.value === "Strawberry"}/>Strawberry
                       <br></br>
              <button onClick={this.radioClick}>SUBMIT</button>
              <h3>{this.state.msg}</h3>
            </div>
        )
    }
}
export default RadioButtons;