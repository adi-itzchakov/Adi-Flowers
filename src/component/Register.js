import React, { Component } from 'react';
import { Input,Button,Icon } from 'semantic-ui-react';
import './Register.css';
import LoginImg from '../pictures/login-img.jpg';

class Register extends Component{
    render(){
        return(
            <div className="registerPage">
                <img id="loginPic" src={LoginImg} alt="LoginImg"></img>
                <div className="headlinesdiv">Name</div>
                <Input className="FirstName" placeholder="First Name"></Input>
                <br />
                <Input className="LastName" placeholder="Last Name"></Input>
                <br />
                <div className="headlinesdiv">Email</div>
                <Input className="Email" placeholder="Email"></Input>
                <br />
                <div className="passwordDiv">Password</div>
                <Input className="Password" placeholder="Password"></Input>
                <br />
                <Input className="ConfirmPassword" placeholder="Confirm Password"></Input>
                <br />
                <Button id="signUp" size='medium'>
                    <a href='/home'>Sign up</a>
                </Button>
                <h3>OR</h3>
                <Button color='facebook'>
                    <Icon name='facebook' /> Facebook
                </Button>
                <Button color='instagram'>
                    <Icon name='instagram' /> instagram
                </Button>
            </div>
        )
    }
}
export default Register;