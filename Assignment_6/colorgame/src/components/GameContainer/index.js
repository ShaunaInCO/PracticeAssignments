import React,{Component} from 'react';
import "./style.css"
import GridBox from "./GridBox"
class GameContainer extends Component{

    constructor (props){
        super (props);
        this.element=[]
        this.row=[];
        this.count=0;
        this.cssClass="parent"
        this.state={
            level:0
        }
    }
    createGrids(val){
        
        for(let i=1;i<=val;i++){
            this.element.push(<div  className="row">{this.createRow(this.count,val*i)}</div>)
            this.count=this.count+val;    
        }
        return this.element;
    }
    createRow(start,end){
              
        this.row=[];
        for(let i=start;i<end;i++){
          
            this.row.push(<GridBox value={i} level={this.state.level+3}/>)
              //console.log(this.state.level)
        }   
        //console.log(this.row)
        return this.row;
    }
    handleClick=(e)=>{
        this.setState({
            level:this.state.level+1
        })
        this.count=0;
        this.element=[];
     
    }
    resetClick=()=>{
        this.setState({
            level:0
        })
        this.count=0;
        this.element=[];
    }
    render(){
        return(
            <> 
                <div className={this.cssClass}>
                    {this.createGrids(this.state.level+3)} 
                    <button onClick={this.handleClick} >right</button>
                    <button onClick={this.resetClick}>wrong</button>
                </div>
            </>
        )
    }
}
export default GameContainer;