import React from 'react';
import {Image, Button} from 'semantic-ui-react';
import './birthday.css';
import Birthday1 from '../pictures/birthday1.jpg';
import Birthday2 from '../pictures/birthday2.jpg';
import Birthday3 from '../pictures/birthday3.jpg';
import Birthday4 from '../pictures/birthday4.jpg';
import Birthday5 from '../pictures/birthday5.jpg';
import Birthday6 from '../pictures/birthday6.jpg';
import Birthday7 from '../pictures/birthday7.jpg';
import Birthday8 from '../pictures/birthday8.jpg';
import Birthday9 from '../pictures/birthday9.jpg';
import Birthday10 from '../pictures/birthday10.jpg';
import Birthday11 from '../pictures/birthday11.jpg';

class Birthday extends React.Component{
    render(){
        return(
            <div className="Birthday">
                <h1 className="titleBirthday">Birthday Collection:</h1>
                <div className="startImage">
                    <div >
                        <Image src={Birthday1} wrapped ui={false}/>
                        <div>
                            <h3>Beyond Blue</h3>
                            <h3 className="birthdayPrice">30$-50$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div>
                        <Image src={Birthday2} wrapped ui={false}/>
                        <div>
                            <h3>Long Stem Red Rose</h3>
                            <h3 className="birthdayPrice">41$-58$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div>
                        <Image src={Birthday3} wrapped ui={false}/>
                        <div>
                            <h3>Best Day</h3>
                            <h3 className="birthdayPrice">42$-61$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div>
                        <Image src={Birthday4} wrapped ui={false}/>
                        <div>
                            <h3>Birthday Brights</h3>
                            <h3 className="birthdayPrice">40$-57$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div className="moveDown">
                        <Image src={Birthday5} wrapped ui={false}/>
                        <div>
                            <h3>Full of Joy</h3>
                            <h3 className="birthdayPrice">46$-63$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div className="moveDown">
                        <Image src={Birthday6} wrapped ui={false}/>
                        <div>
                            <h3>Rays of Life</h3>
                            <h3 className="birthdayPrice">35$-52$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div className="moveDown">
                        <Image src={Birthday7} wrapped ui={false}/>
                        <div>
                            <h3>Bees Knees</h3>
                            <h3 className="birthdayPrice" >39$-55$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div className="moveDown">
                        <Image src={Birthday8} wrapped ui={false}/>
                        <div>
                            <h3>Alluring Elegance</h3>
                            <h3 className="birthdayPrice">43$-67$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div className="moveDown">
                        <Image src={Birthday9} wrapped ui={false}/>
                        <div>
                            <h3>Sunny Sentiments</h3>
                            <h3 className="birthdayPrice">32$-45$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div className="moveDown">
                        <Image src={Birthday10} wrapped ui={false}/>
                        <div>
                            <h3>Best Day</h3>
                            <h3 className="birthdayPrice">43$-67$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>

                    <div className="moveDown">
                        <Image src={Birthday11} wrapped ui={false}/>
                        <div>
                            <h3>Simply Gorgeous</h3>
                            <h3 className="birthdayPrice">41$-59$</h3>
                            <Button color="yellow">Add me</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Birthday;