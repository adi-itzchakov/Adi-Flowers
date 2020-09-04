import React from 'react';
import './contact.css';
import {Icon ,Button} from 'semantic-ui-react';
import LoginImg from '../pictures/login-img.jpg';

class Contact extends React.Component{
    render(){
        return(
            <div className="help">
                <img id="loginPic" src={LoginImg} alt="LoginImg"></img>
                <h2>Contact Us:</h2>
                <hr className="helpHr"/>

                <div className="contact">
                    <div>
                        <Icon name="mail" />
                        Email:
                        <hr className="helpHr"/>
                        shandi15@walla.com
                    </div>
                    <br/>
                    <div>
                        <Icon name="phone" />
                        Phone:
                        <hr className="helpHr"/>
                        052-3868292
                    </div>
                    <br/>
                    <div>
                        <Icon name="compass" />
                        CT Address:
                        <hr className="helpHr"/>
                        Adi Flowers 
                        <br/>
                    Histadrut Street 147,Holon
                    </div>
                    <br/>
                    <div>
                        <Icon name="chat" />
                        Chat:
                        <hr className="helpHr"/>
                        <Button color="teal" className="chat">Chat Now</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;