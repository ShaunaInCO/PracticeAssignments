import React, { Component } from 'react'


class TextField extends Component{

    constructor(props) {
        super(props)
        this.state = {
          list :[],
          value:"",
        }
      }


  handleChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
  };



  onHandleClick = () => {
    
    this.setState(state => {
        const list = [...state.list, this.state.value];
        console.log(this.state.value)
      return {
        list,
        value: '',
      };
    });
  };

    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>SUBMIT</button>
                
                <ul>
                        {this.state.list.map(item => (
                         <li key={item}>{item}</li>
                         ))}
                </ul>
            </div>
        )        
    }
}
export default TextField