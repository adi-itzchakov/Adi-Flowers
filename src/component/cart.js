import React from 'react';
import './cart.css';
import {Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Cart extends React.Component{
    render(){
        return(
            <div className="cartBody">
                <h2>Your Cart is Empty</h2>
                <Link to="/" >
                    <Button color="teal">CONTINUE SHOPPING</Button>
                </Link>
            </div>
        )
    }
}
export default Cart;