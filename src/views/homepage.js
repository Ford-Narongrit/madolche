import React from 'react'
import TopNavBar from '../components/topNavBar'
import SideNavBar from '../components/sideNavBar'

export default function homepage() {
    return (
        <div>
            <TopNavBar/>
            <SideNavBar/>
            <div >
                <div><h1>popular today</h1></div>
            </div>
        </div>
    );
}