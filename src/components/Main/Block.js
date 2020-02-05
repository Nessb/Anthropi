import React, { Component } from 'react'
import './Block.css'
import Container from 'react-bootstrap/Container'
import { MDBBtn } from 'mdbreact'
import Flip from 'react-reveal/Flip'

class Block extends Component {
  render () {
    return (
      <Flip top duration={1500} delay={1500}>
        <Container className='mb-5 mt-5' id='block'>
          <h1>Pour plus d'information sur les périodes de formations, contactez nous.</h1>
          <MDBBtn href='#contact' color='white'>Contact</MDBBtn>
        </Container>
      </Flip>
    )
  }
}

export default Block
