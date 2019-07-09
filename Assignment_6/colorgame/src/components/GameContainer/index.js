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
        this.arrayFromChild=[]
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
    //Creating grids dynamically------!!
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
            if(this.state.indexArray.indexOf(i+1)!=-1)
                 this.row.push(<GridBox value={i} key={this.state.level+"-"+i} cssStyle="clickedBox" array={this.state.indexArray} handlerFromParentSuccess={this.successEvent}/>)
            else{
                this.row.push(<GridBox value={i} key={this.state.level+"-"+i} cssStyle="box" array={this.state.indexArray} handlerFromParentFail={this.failedEvent}/>)
                }
            
        } 
         
        return this.row;
    }

    //------*-------
    //-----handling events from child-----
    successEvent=(val)=>{
            if(this.arrayFromChild.indexOf(val)==-1){
                this.arrayFromChild.push(val)
            }

            if(this.arrayFromChild.length==this.randomArray.length){
                this.randomSize++;
                this.createRandomArray(this.randomSize)
                this.count=0;
                this.element=[];
                this.arrayFromChild=[]
                setTimeout(
                ()=>{this.setState({
                    level:this.state.level+1,
                    parentCss:"parentUp",
                    indexArray:this.randomArray
                })},500)            
        }
            
        if(this.randomArray.length==7){
                window.alert("YOU HAVE SUCCESSFULLY COMPLETED THE GAME")
                this.resetArray()
        }        
    }
    resetArray=()=>{

        this.randomSize=3
        this.createRandomArray(this.randomSize);
        this.count=0;
        this.element=[];
        this.arrayFromChild=[]
        this.setState({
            level:0,
            indexArray:this.randomArray
        })
    }
    failedEvent=()=>{
       
        setTimeout(this.resetArray,500) 
           
    }

    //------*---------
    //----handling toggle button actions-----
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
    }

    //////------*-----
    //----creating unique random array----    
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
    }
    ///------*-----

    
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
                                <div className={"parent "+this.state.parentCss} key={this.state.level}>
                                 
                                     {this.createGrids(this.state.level+3)}
                                </div> 
                        </div>
                </div>
            </div>

        )
    }
}
export default GameContainer;