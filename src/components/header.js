import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'

export default function header(props) {
    return (
        <div className="header">
            <Link to="/"><a>Madochle</a></Link>
            <Link to="/"><a>Login</a></Link>
            <span>
                <input type="text" placeholder="Search.."></input>
                <button type="submit"><i class="fa fa-search"></i></button>
            </span>
        </div>
    )
}