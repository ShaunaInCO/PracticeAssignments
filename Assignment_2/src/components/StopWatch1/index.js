import React, { Component } from 'react'

import "./style.css"
import { thisTypeAnnotation } from '@babel/types';
class StopWatch1 extends Component{

    constructor(props) {
        super(props)
        this.localArray=[]
        this.val=0
        this.count=1
        this.state = {
        check:1,
        timerSec : 0,
        time:[],
        preSec:0
        }
      }
    startTimer=()=>{
          
        if(this.state.check !=0){
        var a = setTimeout(this.changeSeconds,1000);
        }
              
     }
     changeSeconds=()=>{
      this.setState({
         timerSec:this.state.timerSec+1
         })
       console.log()
      this.startTimer(1)
 }

  Timer=(e)=>{
    if(e.target.value=="start"){
        this.setState({
          
            check:this.state.check+1
        })
        console.log(this.state.check)
        this.startTimer()
    }else if(e.target.value=="stop"){
        this.setState({

            check:this.state.check*0
        })
        clearTimeout(this.a)
    }else{
        this.setState({
            check:this.state.check*0,
            timerSec:0
        })
        this.val=0
        this.count=1
    }
  }
  showLap=()=>{
     
      this.localArray = this.localArray.concat("#  "+this.count+"   "+Math.floor((this.state.timerSec-this.val)/60)+":"+(this.state.timerSec-this.val)%60+"  "+Math.floor(this.state.timerSec/60)+":"+this.state.timerSec%60+" ")
      this.localArray = this.localArray.concat(<br></br>)
      this.setState({
          time:this.localArray
      })
      this.val=this.state.timerSec
      this.count++
      
  }
    render(){
        return(
            <div>
                <div className="watch">
                    <h1>{Math.floor(this.state.timerSec/60)+":"+this.state.timerSec%60}</h1><br></br>
                    <button onClick={this.Timer} value="start">START</button>
                    <button onClick={this.Timer} value="stop">STOP</button>
                    <button onClick={this.Timer} value="reset">RESET</button>
                    <button onClick={this.showLap} value="lap">LAP</button>
                    <h2>{this.state.time}</h2>
                </div>
                
            </div>
        )
    }
}
export default StopWatch1