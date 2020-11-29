import React from 'react'
import { Link } from 'react-router-dom'
import '../css/recommendBar.css'

import dessert from '../images/dessert.jpg'

export default function recommendBar (){
    return (
        <div className='container'>
            <Link to='/'>
                <img src={dessert} alt='rating' />
            </Link>  
            <Link to='/'>
                <img src={dessert} alt='rating' />
            </Link>  
            <Link to='/'>
                <img src={dessert} alt='rating' />
            </Link>  
            <Link to='/'>
                <img src={dessert} alt='rating' />
            </Link>  
            <Link to='/'>
                <img src={dessert} alt='rating' />
            </Link>
        </div>
    )
}