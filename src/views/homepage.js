import React from 'react'
import HeaderNavBar from '../components/header'
import NavBar from '../components/navBar'
import RecommendBar from '../components/recommendBar'

export default function homepage() {
    return (
        <div>
            <HeaderNavBar/>
            <NavBar/> 
            <div style={{ marginLeft: '300px'}}>
                <div>
                    <h1 style={{ textAlign: 'left', paddingTop: '70px'}}>
                        Popular Today
                    </h1>
                    <RecommendBar/>
                </div>

                <div>
                    <h1 style={{ textAlign: 'left', paddingTop: '300px' }}>
                        Popular Today
                    </h1>
                    <RecommendBar/>
                </div>

            </div>

        </div>
    );
}