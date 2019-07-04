import React,{Component} from 'react';
import "./style.css"
import Grid from "./Grid" 
class GridTiles extends Component{
    constructor (props){
        super (props);
        this.element=[]
        this.row=[];
        this.count=0;
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
            this.row.push(<Grid value={i} start={start} end={end}/>)
        }
        return this.row;
    }
    
    render(){
        return(
            <div className="parent">
                {this.createGrids(this.props.value)}
            </div>           
        
        )
    }
}
export default GridTiles