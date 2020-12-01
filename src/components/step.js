import React from 'react'
import '../css/step.css'

export default function step (props){
    const num = props.step
    const detail = props.detail
    return (
        <div className='flex-container'>
            <div>{num + "  " + detail}</div>
            {/* <img  src={ require( props.image ) } /> */}
            <img src={ props.image } /> 
        </div>
    )
}