import React, { Component } from 'react'
import "./style.css"




function SuccessMsg(props){
    return(
        <div className = {props.msgType} >

            <spam className="alert">{props.alertName}</spam>
            <spam className="msg">{props.alertMsg}</spam>

        </div>
    )
}

export default SuccessMsg;