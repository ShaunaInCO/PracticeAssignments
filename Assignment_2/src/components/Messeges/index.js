import React, { Component } from 'react'
import SuccessMsg from './SuccessMsg'

function Messeges(){
    return(
        <div>
        <SuccessMsg alertName = "Well done!" alertMsg = "you succesfully read this important alert message" msgType="success"/>
        <SuccessMsg alertName = "Heads up!!" alertMsg = "This alert needs your attention, but its not super important" msgType="info"/>
        <SuccessMsg alertName = "Warning!" alertMsg = "Better check yourself,you are not looking good." msgType="warning"/>
        <SuccessMsg alertName = "Oh snap!" alertMsg = "Change few things up and try submitting again" msgType="error"/>
        </div>
    )
}

export default Messeges;