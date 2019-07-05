import React,{Component} from 'react';
import "./style.css"

class GridBox extends Component{

    constructor (props){
        super (props);
        this.val=this.props.level
       // console.log(this.val)
        this.divStyle={
            height:600/this.val,
            width:600/this.val,
            backgroundColor:"darkviolet",
            border:"solid",
            borderColor: "white"
        }
        this.state={
            level:0
        }
    }
    render(){

        return(
            
           <div style={this.divStyle} value={this.props.value}>{this.props.value} 
           </div>
        )
    }
}
export default GridBox;