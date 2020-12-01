import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/header'

import "../css/signPage.css"

export default function signUpPage(props) {
    return (
        <div className="mycontainer">
            <div className="row" style={{height: "100vh"}}>
                <div className="col-sm-4 left">
                        </div>
                        <div className="col-sm-8 innerright">
                            <div >
                                <h2 className="loginHead">SignUp Page</h2>
                                <br/>
                                <form action="/" style = {{color : "black"}}>
                                <h5>Firstname</h5>
                                <input className="inputStyle" type = "text" name = "firstname" placeholder="Firstname"/>
                                <br/>
                                <br/>
                                <h5>Lastname</h5>
                                <input className="inputStyle" type = "text" name = "lastname" placeholder="Lastname"></input>
                                <br/>
                                <br/>
                                <h5>Email address</h5>
                                <input className="inputStyle" type = "text" name = "email" placeholder="Email address"></input>
                                <br/>
                                <br/>
                                <h5>Username</h5>
                                <input className="inputStyle" type = "text" name = "username" placeholder="Username"></input>
                                <br/>
                                <br/>
                                <h5>Password</h5>
                                <input className="inputStyle" type = "text" name = "password" placeholder="Password"></input>
                                <br/>
                                <br/>
                                <h5>Confirm password</h5>
                                <input className="inputStyle" type = "text" name = "conPassword" placeholder="Confirm password"></input>
                                <br/>
                                <br/>
                                <input className="inputStyle" type = "submit" value="Sign Up"></input>
                                </form>
                            </div>
                            <br></br>
                </div>
            </div>
            <Header/>
        </div>
    );
}
        
