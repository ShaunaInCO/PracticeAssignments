import React, { Component } from 'react'

import "./style.css"
import { thisTypeAnnotation } from '@babel/types';
class StopWatch extends Component{
    constructor(props) {
        super(props)
        this.localArray=[]
        this.state = {
        check:1,
        timerSec : 0,
        time:[],
        timerMin : 0,
        count:1,
        lapMin:0,
        lapSec:0
        }
      }

      startTimer=()=>{
          
            if(this.state.check !=0){
            setTimeout(this.changeSeconds,1000);
            }
                  
      }
    changeSeconds=()=>{
        this.setState({
            timerSec:this.state.timerSec+1
        })
        if(this.state.timerSec>=60){
            this.setMin()
            this.setState({
                timerSec:this.state.timerSec*0
            }) 

        }
        console.log()
        this.startTimer()
     }
     setMin=()=>{
        var mins;
        this.setState({
            timerMin:this.state.timerMin+1
        })

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
        }else{
            this.setState({

                timerSec:this.state.timerSec*0,
                timerMin:this.state.timerMin*0,
                check:this.state.check*0

            })
        }
      }
      showLap=()=>{
        this.setState({
            count:this.state.count+1
        })
        this.setState({
            lapMin:this.state.timerMin,
            lapSec:this.state.timerSec
        })
          this.localArray=this.localArray.concat(<p>{"#"+this.state.count+" "+this.state.timerSec-this.state.lapSec+":"+this.state.timerSec-this.state.lapMin+"   "+this.state.timerMin+":"+this.state.timerSec}</p>)
          this.setState({
              time:this.localArray
          })
          
      }
    render(){
        return(
            <div className = "watch">
                <h1 >{this.state.timerMin+":"+this.state.timerSec}</h1><br></br>
                <button onClick={this.Timer} value="start">START</button>
                <button onClick={this.Timer} value="stop">STOP</button>
                <button onClick={this.showLap} value="stop">LAP</button>
                <button onClick={this.Timer} value="stop">RESET</button>
                <h2>{this.state.time}</h2>
            </div>
        )
    }
}
export default StopWatch