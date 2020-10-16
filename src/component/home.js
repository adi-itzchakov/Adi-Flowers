import React from 'react';
import { Card,Button,Image,Icon } from 'semantic-ui-react'
import Footer from '../component/Footer';
import './home.css';
import Img from '../pictures/img1.png';
import Gerbera from '../pictures/gerbera.jpg';
import Helianthus_annuus from '../pictures/annuus.jpg';
import Lilium_candidum from '../pictures/lilium.jpg';
import Lily from '../pictures/lily.jpg';
import Rose from '../pictures/rose.jpg';
import Iris from '../pictures/iris.jpg';
import Anemone from '../pictures/Anemone.jpg';
import Delphinium from '../pictures/Delphinium.png';
import Chrysanthemum from '../pictures/chrysanthemum.jpg';
import Gypsophila from '../pictures/Gypsophila.jpg';
import Begonia from '../pictures/Begonia.jpg';
import lavender from '../pictures/lavender.jpg'

const extra = (
    <a href="/home">
      <Button color="yellow">Add me</Button>
    </a>
  )

const Home = () => {
    return(
        <div>
            <div>
                <img id="img1" src={Img} alt="Img"/>
                <h1 id="title1">Welcome to Adi Flowers!</h1>
            </div>
            <h1 id="meetTitle">Meet our Flowers:</h1>
            <h4 className="mixFlowers">Here you can mix between types of flowers</h4>
            <div className="information">

            <Card style={{marginTop:13}}>
                <Image src={Gerbera} wrapped ui={false} style={{height:255}}/>
                <Card.Content>
                <Card.Header>Gerbera</Card.Header>
                <Card.Meta>
                    <span className='cost'>40$</span>
                </Card.Meta>
                <Card.Description>
                    Give positive and encouraging energies thanks to their shape and varied colors
                </Card.Description>
                </Card.Content>
                <Card.Content extra >
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>
            
            <Card >
                <Image src={Helianthus_annuus} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Helianthus annuus</Card.Header>
                <Card.Meta>
                    <span className='cost'>36$</span>
                </Card.Meta>
                <Card.Description>
                    A symbol of boundless infatuation  
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>

            <Card >
                <Image src={Lilium_candidum} wrapped ui={false} style={{height:255}}/>
                <Card.Content>
                <Card.Header>Lilium candidum</Card.Header>
                <Card.Meta>
                    <span className='cost'>43$</span>
                </Card.Meta>
                <Card.Description>
                    Symbolizes passion and blaze
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>

            <Card >
                <Image src={Lily} wrapped ui={false} style={{height:255}}/>
                <Card.Content>
                <Card.Header>Lily</Card.Header>
                <Card.Meta>
                    <span className='cost'>30$</span>
                </Card.Meta>
                <Card.Description>
                    Symbol of purity
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>

            <Card >
                <Image src={Iris} wrapped ui={false} style={{height:260}}/>
                <Card.Content>
                <Card.Header>Iris</Card.Header>
                <Card.Meta>
                    <span className='cost'>27$</span>
                </Card.Meta>
                <Card.Description>
                    The main symbol of the Society for the Protection of Nature                
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>
            
            <Card >
                <Image src={Rose} wrapped ui={false} style={{height:255}}/>
                <Card.Content>
                <Card.Header>Rose</Card.Header>
                <Card.Meta>
                    <span className='cost'>42$</span>
                </Card.Meta>
                <Card.Description>
                    Symbol of love and romance               
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>

            <Card >
                <Image src={Anemone} wrapped ui={false} style={{height:260}}/>
                <Card.Content>
                <Card.Header>Anemone</Card.Header>
                <Card.Meta>
                    <span className='cost'>32$</span>
                </Card.Meta>
                <Card.Description>
                    symbolizes the blood of the saints              
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>

            <Card >
                <Image src={Delphinium} wrapped ui={false} style={{height:255}} />
                <Card.Content>
                <Card.Header>Delphinium</Card.Header>
                <Card.Meta>
                    <span className='cost'>41$</span>
                </Card.Meta>
                <Card.Description>
                    Symbolizes sensitivity and open heart              
                </Card.Description>
                </Card.Content>
                <Card.Content extra >
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>

            <Card >
                <Image src={Chrysanthemum} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Chrysanthemum</Card.Header>
                <Card.Meta>
                    <span className='cost'>36$</span>
                </Card.Meta>
                <Card.Description>
                    Symbolizes love and truth              
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>

            <Card >
                <Image src={Gypsophila} wrapped ui={false} style={{height:260}}/>
                <Card.Content>
                <Card.Header>Gypsophila</Card.Header>
                <Card.Meta>
                    <span className='cost'>35$</span>
                </Card.Meta>
                <Card.Description>
                    Symbolizes cheerfulness              
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>

            <Card >
                <Image src={Begonia} wrapped ui={false} style={{height:260}}/>
                <Card.Content>
                <Card.Header>Begonia</Card.Header>
                <Card.Meta>
                    <span className='cost'>25$</span>
                </Card.Meta>
                <Card.Description>
                    Symbolizes deep thoughts              
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>

            <Card style={{height:415}}>
                <Image src={lavender} wrapped ui={false} style={{height:260}}/>
                <Card.Content>
                <Card.Header>Lavender</Card.Header>
                <Card.Meta>
                    <span className='cost'>38$</span>
                </Card.Meta>
                <Card.Description>
                    Symbolizes hope, love and peace                
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="/">
                    {extra}
                </a>
                </Card.Content>
            </Card>
        </div>
        <div className="customers">
            <p className="title3">Here's What Our Customers Are Saying...</p>
            <ul>
                <ol>
                    <p className="P_description">Beautiful!!!</p>
                    <div className="Stars">
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                    </div>
                    <p>"Definitely brought a smile to my friend's face!"</p>   
                    <p className="namesOl">-Mor</p>
                </ol>
                <hr className="homeHr"/>
                <ol>
                    <p className="P_description">Delivered on Time</p>
                    <div className="Stars">
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                    </div>
                    <p>"Invited and arriving exactly by the date shown."</p>   
                    <p className="namesOl">-Ran</p>
                </ol>
                <hr className="homeHr" />
                <ol>
                    <p className="P_description">Greate Arrangement</p>
                    <div className="Stars">
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                        <Icon name="star" color="olive"/>
                    </div>
                    <p>"The arrangement was gorgeous, and customer service was amazing!"</p>   
                    <p className="namesOl">-Shira</p>
                </ol>
            </ul>
        </div>
        <Footer />
    </div>
    )
}


export default Home;