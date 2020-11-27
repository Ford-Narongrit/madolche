import React from 'react'
import '../css/navBar.css'

export default function navBar(props) {
    return (
        <div className = "topnav">
            <a className="left">Madolche</a>
            <a className="right">login</a>
            <a>search</a>
        </div>
    )
}