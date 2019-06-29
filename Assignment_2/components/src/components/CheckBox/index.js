import React, { Component } from 'react'
class CheckBox extends Component{

    constructor(props) {
        super(props)
        this.content =[]
        this.state = {
        list:[],
        value:"",
        msg:""
        }
      }

      handleCheckBox = (e) =>{

         var val=this.content.indexOf(e.target.value)
         if(val==-1){ 

            this.content = this.content.concat(e.target.value)
         }
         else{
             this.content.splice(val,1)
         }
        this.setState({
            list:this.content
          })
          console.log(this.content)
      }

      handleClick =(e)=>{
        this.setState({
            
            msg:"you have visited these cities "+this.state.list,
            value:" "
        });
    }
    createCities =(cities)=>{
    
        var tokens=[]
        for(let i=0;i<cities.length;i++){
            tokens[i]=<><input type="checkbox"
                         value = {cities[i]}               
                        onChange ={this.handleCheckBox}
                         /><label>{cities[i]}</label><br></br></>
        }
        return tokens 
    }
        
    render(){
        return(
            <div>
                {this.createCities(this.props.city)}
                <button onClick={this.handleClick}>SUBMIT</button>
                <h1>{this.state.msg}</h1>
                 
            </div>
        )
    }
}
export default CheckBox;