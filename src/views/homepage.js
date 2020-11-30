import React from 'react'
import HeaderNavBar from '../components/header'
import NavBar from '../components/navBar'
import RecommendBar from '../components/recommendBar'

export default function homepage() {
    return (
        <div>
            <HeaderNavBar/>
            <div style={{ marginTop:'30px' }}>
            </div>    <NavBar/> 
                <div>
                    recommand today
                </div>
                <RecommendBar/>

        </div>
    );
}