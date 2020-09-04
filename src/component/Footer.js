import React, { Component } from 'react';
import './footer.css';
import {Icon} from 'semantic-ui-react';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <p className="textFooter1">
                    <Icon name="copyright outline"/>
                    2020 Adi itzchakov
                    <span className="textFooter2">follow us on
                        <Icon name="facebook" />
                        <Icon name="instagram"/>
                        <Icon name="linkedin"/>
                        </span>
                </p>
            </div>
        )
    }
}
export default Footer;