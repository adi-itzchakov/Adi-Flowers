import React, {Component} from 'react';
import { Switch,Route } from "react-router-dom";

import Home from '../component/home';
import Birthday from '../component//birthday';
import Contact from '../component/contact';
import Account from '../component/account';
import Register from '../component/Register';
import Cart from '../component/cart';

class Routers extends Component
{
    render(){
        return (
            <Switch>
                <Route path='/cart' component={Cart} />
                <Route path='/register' component={Register} />
                <Route path='/contact' component={Contact} />
                <Route path='/birthday' component={Birthday} />
                <Route path='/home' component={Home} />
                <Route exact path='/' component={Account} />
            </Switch>
        )
    }
}
export default Routers;
