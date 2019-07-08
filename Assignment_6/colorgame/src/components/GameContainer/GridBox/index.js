import React,{Component} from 'react';
import "./style.css"

class GridBox extends Component{

    constructor (props){
        super (props);
        this.state={
          boxStyle:""
        }
    }
    handleClick=(e)=>{
        if(this.props.array.indexOf(e.target.value)!=-1){

        }else{
            this.setState({
                boxStyle:"clickedBox"
            })
        }
    }
    render(){

        return(
            
           <div className={this.state.boxStyle+" "+this.props.cssStyle}value={this.props.value} onClick={this.handleClick}> 
           </div>
        )
    }
}
export default GridBox;