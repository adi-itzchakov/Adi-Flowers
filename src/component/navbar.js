import React from 'react'
import { Menu,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Menu inverted color='teal'>
        <Menu.Item 
          name='Adi Flowers'
        >
          Adi Flowers
        </Menu.Item>

        <Menu.Item as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item as={Link} to='/birthday'
          name='birthday'
          active={activeItem === 'birthday'}
          onClick={this.handleItemClick}
        >
          Birthday
        </Menu.Item>

        <Menu.Item as={Link} to='/contact'
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          Contact Us
        </Menu.Item>

        <Menu.Menu position='right' >
          <Menu.Item as={Link} to='/account'
            name='account'
            active={activeItem === 'account'}
            onClick={this.handleItemClick}
          >
          <Icon name="sign in" />
            Sign in/Register
          </Menu.Item>
      
          <Menu.Item as={Link} to='/cart'
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
          >
          <Icon name="shopping cart" />
            Cart
          </Menu.Item>
        </Menu.Menu>
    </Menu>
    )
  }
}

export default Navbar;