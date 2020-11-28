import React from 'react'
import '../css/topNavBar.css'

export default function topNavBar(props) {
    return (
        <div className = "topnav">
            <a href="#" className="left">Madolche</a>
            <a className="right">login</a>
            <a className="left">search</a>
        </div>
    )
}