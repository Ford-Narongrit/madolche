import React from 'react'
import HeaderNavBar from '../components/header'
import NavBar from '../components/navBar'
import RecommendBar from '../components/recommendBar'

export default function homepage() {
    return (
        <div>
            <HeaderNavBar/>
            <NavBar/> 
            <div>
                recommand today
            </div>
            <RecommendBar/>
        </div>
    );
}