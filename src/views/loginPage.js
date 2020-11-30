import React from 'react'
import {Link} from 'react-router-dom'
import "../css/loginPage.css"
import Header from '../components/header'

export default function loginPage(props) {
    return (
        <div className="mycontainer">
            
            <div className="row" style={{height: "100vh"}}>
                <div className="col-sm-4 left">
                    <a></a>
                        </div>
                        <div className="col-sm-8 innerright">
                            <div >
                                <h2 className="loginHead">LoginPage</h2>
                                <br/>
                                <form action="/homepag" style = {{color : "black"}}>
                                
                                <input className="inputStyle" type = "text" name = "username" placeholder="username"/>
                                <br/>
                                <br/>
                                <input className="inputStyle" type = "text" name = "password" placeholder="password"></input>
                                <br/>
                                <br/>
                                <input className="inputStyle" type = "submit" value="Submit"></input>
                                </form>
                            </div>
                            <br></br>
                            <a href="./signUpPage"><button className="btnSignup" >Sign Up  </button> </a>
                </div>
            </div>
            <Header/>
        </div>
        
        
    );
}