import React, { Component } from 'react'

class DropDown extends Component{

    constructor(props) {
        super(props)
        this.state = {
        value:"",
        msg:""
        }
      }
      change=(e)=>{
          this.setState({
            value:e.target.value
          });
          console.log(this.state.value)
      }
      handleDrop=(e)=>{
          this.setState({
                msg:"you are from "+this.state.value+" state"
          });
      }
   
   
      render(){
        return(
            <div>
              <select onChange={this.change} value={this.state.value}>
              <option value="" disabled selected>Select your state</option>
                  <option value="Andhra Pradesh" >Andhra Pradesh</option>
                  <option value="Telangana" >Telangana</option>
                  <option value="Kerala" >Kerala</option>
                  <option value="TamilNadu" >TamilNadu</option>
             </select>
             <button onClick={this.handleDrop}>SUBMIT</button>
             <h3>{this.state.msg}</h3>
            </div>
        )
    };
}
export default DropDown