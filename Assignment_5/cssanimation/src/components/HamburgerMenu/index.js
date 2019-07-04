import React,{Component} from 'react';
import "./style.css"
class HamburgerMenu extends Component{
    constructor (props){
        super (props);
        this.val=0;
        this.state={
            class:"division1"
        }
    }
    handleOnClick=(e)=>{
        this.val=this.val+1;
        if(this.val % 2 === 1){
            this.setState({
                class:"division",
            })
        }else{
            this.setState({
                class:"division1",
            })
        }
    }

    render(){ return (
        <div>
            <div className={this.state.class}><span className="spam">Hey, Here I am</span></div>
            <input type="image" src="assests/showDown.png" class="showDown" onClick={this.handleOnClick}/>
        </div>
    )}
}
export default HamburgerMenu