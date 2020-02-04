import React, { Component } from 'react'
import './Presentation.css'
import { Container, Image, Col, Row } from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { MDBView } from 'mdbreact'
import { Timeline } from 'react-twitter-widgets'

class Presentation extends Component {
  render () {
    return (
      <Container fluid id='presentation'>
        <Row className='mt-5'>
          <Col lg='7' md='12'>
            <Fade left duration={1500} delay={1000}>
              <MDBView hover zoom>
                <Image className='mb-5' src={require('../../img/team.jpg')} fluid />
              </MDBView>
            </Fade>
          </Col>
          <Col lg='5' md='12'>
            <h1 className='text-left mb-5'>
              <Fade right cascade delay={1000}>
                  Qui sommes-nous ?
              </Fade>
            </h1>

            <Bounce right duration={2500} delay={1000}>
              <p className='text-left'>AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .</p>
              <p className='text-left mb-5'>Nos liens avec les laboratoires de recherche nous permettent de proposer des formations sur des bases scientifiques.</p>
              <p className='text-left'>N’hésitez pas à nous contacter pour une démonstration sur site !</p>
              <p className='text-right'><strong>La Team AnthroPi !</strong></p>
              <Timeline className='timeline' dataSource={{ sourceType: 'profile', screenName: 'Anthropi_' }} options={{ username: 'Anthropi_', height: '22em' }} onLoad={() => console.log('Timeline is loaded!')} />
            </Bounce>
          </Col>
        </Row>

      </Container>
    )
  }
}
export default Presentation
