import React from 'react';
import { Input,Button,Icon } from 'semantic-ui-react'
import './account.css';
import LoginImg from '../pictures/login-img.jpg';

class Account extends React.Component{
    render(){
        return(
            <div className="loginPage">
                <img id="loginPic" src={LoginImg} alt="LoginImg"></img>
                <Input className="email_input" placeholder="Email"></Input>
                <br />
                <Input className="password_input" placeholder="Password"></Input>
                <br />
                <Button size='medium'>
                    <a href='/home'>Login</a>
                </Button>
                <br />
                <a href="/#">Forgot Password?</a>
                <h3>OR</h3>
                <Button color='facebook'>
                    <Icon name='facebook' /> Facebook
                </Button>
                <Button color='instagram'>
                    <Icon name='instagram' /> instagram
                </Button>
                <div className="registerNow">
                    Don't have an account?
                    <a href="/register"> Register Now</a>
                </div>
            </div>
        )
    }
}
export default Account;