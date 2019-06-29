import React, { Component } from 'react'

class ClickMe extends Component{
    constructor(props) {
        super(props)
        this.state = {
            value:0
        }
      }
      handleCheckBox = (e) =>{
        
        this.setState({

            value :this.state.value+1
        })
        console.log(this.state.value)
    }
    handleClick = (e) =>{
        if(this.state.value%2 === 1){
            
            window.alert("I am working")
        }
    }
    render(){
        return(
            <div>
                <input type="checkbox"
                 value = "Disabled"
                 onChange ={this.handleCheckBox}
                 ref = "check"
                 ></input><label>Disabled</label><br></br>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
export default ClickMe