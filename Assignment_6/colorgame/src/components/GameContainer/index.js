import React,{Component} from 'react';
import "./style.css"
import GridBox from "./GridBox"
class GameContainer extends Component{

    constructor (props){
        super (props);
        this.element=[]
        this.row=[];
        this.count=0;
        this.randomSize=3;
        this.on=0;
        this.randomArray=[]
        this.createRandomArray(3)
        this.state={
            level:0,
            fullViewOn:"",
            labelContent:"",
            boxStyle:"",
            parentCss:"",
            indexArray:this.randomArray
        }

    }
    //UI Code------!!!!!
    createGrids(val,arr){
        
        for(let i=1;i<=val;i++){
            this.element.push(<div  className="row">{this.createRow(this.count,val*i,arr)}</div>)
            this.count=this.count+val;    
        }
        return this.element;
    }
    createRow(start,end,arr){
              
        this.row=[];
        for(let i=start;i<end;i++){
            if(arr.indexOf(i+1)!=-1)
                 this.row.push(<GridBox value={i} cssStyle="clickedBox" array={arr}/>)
            else{
                this.row.push(<GridBox value={i} cssStyle="box" array={arr}/>)
                }
              console.log(this.state.indexArray.length)
        } 
         
        return this.row;
    }
    handleClick=(e)=>{
        this.randomSize++;
        this.createRandomArray(this.randomSize)
   
        this.setState({
            level:this.state.level+1,
            parentCss:"parentUp",
            indexArray:this.randomArray,
        })
        setTimeout(this.clearArray,5000)
        this.count=0;
        this.element=[];
        
     
    }
    resetClick=()=>{
        this.createRandomArray(3);
        this.setState({
            level:0,
            indexArray:this.randomArray
        })
        this.count=0;
        this.element=[];
        
    }
    changeStyle=()=>{
        
        if(this.on%2==0){
            this.setState({
                fullViewOn:"fullViewOn",
                labelContent:"top-containerOn",
                boxStyle:"boxOn"

            })
        }else{
            this.setState({
                fullViewOn:" ",
                labelContent:" ",
                boxStyle:""

            })
        }
        this.on++;
       // console.log(e.target.value)
    }

//////------end----
// functionality--

    
    createRandomArray=(val)=>{
        var num=val;
        var max=val*val;
        this.randomArray=[]
        while(num!=0){
            var value=Math.floor(Math.random() * (max - 1) + 1);
            if(this.randomArray.indexOf(value)==-1 && value!=0){
                this.randomArray.push(value)
                num=num-1;
            }            
        }
      //console.log(this.randomArray)
    }
    clearArray=()=>{
        this.setState({
            indexArray:[]
        })
        //console.log(this.state.indexArray)
    }
    
    render(){
        return(
            <div className={this.state.fullViewOn+" fullView"}>
                <div className="container"> 
                
                    <div>
                        <div className={this.state.labelContent+" top-container"}><span>Level:{this.state.level}</span>
                                <div>
                                    <span className={this.state.labelContent}>Theme Mode:</span>
                                    <label className="switch">
                                    <input type="checkbox" onChange={this.changeStyle}/>
                                        <span className="slider round"></span>
                                    </label>
                            </div>
                            </div>
                                <div className={"parent "+this.state.parentCss}>
                                 
                                     {this.createGrids(this.state.level+3,this.state.indexArray)}
                                </div> 
                            <button onClick={this.handleClick} >right</button>
                            <button onClick={this.resetClick}>wrong</button>
                            <button onClick={this.clearArray} >reset</button>
                        </div>
                </div>
            </div>

        )
    }
}
export default GameContainer;