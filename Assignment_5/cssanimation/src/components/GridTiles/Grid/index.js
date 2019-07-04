import React,{Component} from 'react';
import "./style.css"
class Grid extends Component{
    constructor (props){
        super (props);
       this.state={
           CssClass:" "
       }
    }

    onHandleClick=(e)=>{
        
        if(this.props.value==this.props.start || this.props.value==this.props.end-1){
            if(this.state.CssClass=="grid-3d"){

                this.setState({
                    CssClass:"anti-grid-3d"  
                })
                    
            }else{
                this.setState({
                    CssClass:"grid-3d"  
                })
            }
            
        }else{
           
            if(this.state.CssClass=="grid-2d"){
                this.setState({
                    CssClass:"anti-grid-2d"  
                })
                    
            }else{
                this.setState({
                    CssClass:"grid-2d"  
                })
            }
        }
        
        console.log(this.state.CssClass)

       
    }

    render(){
        return(
            
           <div className={this.state.CssClass+" grid"} onClick={this.onHandleClick} value={this.props.value}>
               <span>{this.props.value}</span>
            </div>
        )
    }
}
export default Grid