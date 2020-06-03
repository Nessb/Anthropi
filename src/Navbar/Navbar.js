import React from 'react'
import './Navbar.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView } from 'mdbreact'
import { genericHashLink } from 'react-router-hash-link'
// Lien Ancrage personnalisée pour garder les fonction de MDBNavLink
const MyHashLink = (props) => genericHashLink(props, MDBNavLink)

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapse: false,
      isWideEnough: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render () {
    return (

      <header id='navbar'>
        <MDBNavbar color='gray-blue-gradient' fixed='top' dark expand='lg' scrollingNavbarOffset={800} >
          <MDBNavbarBrand>
            <MyHashLink to='#navbar'>
              <img src={require('../img/logo.png')} height='50' alt='logo anthropi' />
            </MyHashLink>
          </MDBNavbarBrand>
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MyHashLink className='text-white' to='#presentation'>Présentation</MyHashLink>
              </MDBNavItem>
              <MDBNavItem >
                <MyHashLink className='text-white' to='#simulphone'>SimulPhone®</MyHashLink>
              </MDBNavItem>
              <MDBNavItem>
                <MyHashLink className='text-white' to='#formation'>Formation</MyHashLink>
              </MDBNavItem>
              <MDBNavItem>
                <MyHashLink className='text-white' to='#formateurs'>Notre équipe</MyHashLink>
              </MDBNavItem>
              <MDBNavItem >
                <MyHashLink className='text-white' to='#contact'>Contact</MyHashLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <MDBView className='img-fluid' src={require('../img/desktop.jpg')} >
          <MDBMask overlay='black' >
            <img src={require('../img/logo.png')} className='anthropi-logo img-fluid' alt='logo anthropi' align='center' />
            <span className='col-12 text-white'><strong><i>'Générateur d’ e-motion'</i></strong></span>
          </MDBMask>
        </MDBView>
      </header>

    )
  }
}

export default Navbar
