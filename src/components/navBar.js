import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navBar.css'

import dessert from '../images/dessert.jpg'

export default function navBar(props) {
    return (
        <div style={{ }}>
            <div className="sidenav">
                <Link to="/">
                    <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                        <div className='text'>Cake</div>
                    </div>
                </Link>
                <Link to="/">
                    <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                        <div className='text'>Cookie</div>
                    </div>
                </Link>
                <Link to="/">
                    <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                        <div className='text'>Gelatin</div>
                    </div>
                </Link>
                <Link to="/">
                    <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                        <div className='text'>Bread</div>
                    </div>
                </Link>
                <Link to="/">
                    <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                        <div className='text'>Ice cream</div>
                    </div>
                </Link>
                <Link to="/">
                    <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                        <div className='text'>Pie</div>
                    </div>
                </Link>
                <Link to="/">
                    <div className='img' style={{  backgroundImage: `url(${dessert})` }} >
                        <div className='text'>candy</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}