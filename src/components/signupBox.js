import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import "../css/signupBox.css";

export default function signup() {
  
    return (
      <div className="signup">
          <Jumbotron>
            <h1>Sign Up</h1>
            <Form>
              <Form.Group size="lg" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="name" 
                    placeholder="Please Enter First Name"
                />
              </Form.Group>

              <Form.Group size="lg" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="name" 
                    placeholder="Please Enter Last Name"
                />
              </Form.Group>

              <Form.Group size="lg" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email" 
                    placeholder="Please Enter Email"
                />
              </Form.Group>

              <Form.Group size="lg" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="username" 
                    placeholder="Please Enter Username"
                />
              </Form.Group>

              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password" 
                    placeholder="Please Enter Password"
                />
              </Form.Group>

              <Form.Group size="lg" controlId="Confirm Password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password" 
                    placeholder="Please Enter Password again"
                />
              </Form.Group>
              <Button block size="lg" type="submit" >
                Signup
              </Button>
            </Form>
          </Jumbotron>
      </div>
    );
  }