import React from 'react'
import { Link } from 'react-router-dom'
import '../css/recommendBar.css'

import dessert from '../images/dessert.jpg'

export default function recommendBar (){
    return (
        <div className='container'>
            <div>
                <Link to='/showPage' >
                    <div className='content'>
                    <img src={dessert} alt='rating' />
                        <p id='showtext'>dessert1</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/showPage' >
                    <div className='content'>
                    <img src={dessert} alt='rating' />
                        <p id='showtext'>dessert2</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/showPage' >
                    <div className='content'>
                    <img src={dessert} alt='rating' />
                        <p id='showtext'>dessert3</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/showPage' >
                    <div className='content'>
                    <img src={dessert} alt='rating' />
                        <p id='showtext'>dessert4</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/showPage' >
                    <div className='content'>
                    <img src={dessert} alt='rating' />
                        <p id='showtext'>dessert5</p>
                    </div>
                </Link>
            </div> 
        </div>
    )
}