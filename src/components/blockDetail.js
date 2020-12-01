import React from 'react'
import '../css/step.css'

export default function BlockDetail (props) {
    const time = "เวลา"+ ": " + props.time
    const diff = "ความยาก"+ ": " + props.diff
    const size = "สำหรับ" + ": "+ props.size
    return (
        <div className='blockColumn'>
            <div>{time}</div>
            <div>{diff}</div>
            <div>{size}</div>
        </div>
    )
    
}