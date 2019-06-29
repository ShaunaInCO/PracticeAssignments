import React, { Component } from 'react'
import RoundedImage from './RoundedImage'
import SquareImage from './SquareImage'
import CircleImage from './CircleImage'

function Shapes(){
    return(
        <div>
            <SquareImage />
            <RoundedImage />
            <CircleImage />
        </div>
    )
} 
export default Shapes;