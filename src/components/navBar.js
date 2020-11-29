import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navBar.css'

import dessert from '../images/dessert.jpg'

export default function navBar(props) {
    return (
        <div className="sidenav">
            <Link to="/">
                <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                    <div className='text'>dessert1</div>
                </div>
                
            </Link>

            <Link to="/">
                <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                    <div className='text'>dessert2</div>
                </div>
                
            </Link>

            <Link to="/">
                <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                    <div className='text'>dessert3</div>
                </div>
                
            </Link>

            <Link to="/">
                <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                    <div className='text'>dessert4</div>
                </div>
                
            </Link>
        </div>
    )
}