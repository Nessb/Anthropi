import React, { Component } from 'react'
import './Formations.css'
import Slider from 'react-slick'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Fade from 'react-reveal/Fade'

class Formations extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null
    }
  }

  componentDidMount () {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }

  render () {
    return (
      <div>
        <MDBContainer fluid id='formation' className='mb-5'>
          <MDBRow className='mt-5'>
            <h1 className='h1 mx-5 '>
              <Fade left cascade delay={1000}>
                Nos Formations
              </Fade>

            </h1>
            <MDBCol xl='7' lg='7' md='12' sm='12' xs='12' className='offset-lg-5 offset-xl-5'>
              <Fade right delay={1800}>
                <Slider
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}
                >
                  <div>
                    <Image className='image' src={require('../../img/formation.JPG')} fluid rounded />
                  </div>
                  <div>
                    <Image className='image' src={require('../../img/micro.jpg')} fluid rounded />
                  </div>
                  <div>
                    <Image className='image' src={require('../../img/stand.jpg')} fluid rounded />
                  </div>
                  <div>
                    <Image className='image' src={require('../../img/stand2.jpg')} fluid rounded />
                  </div>
                  <div>
                    <Image className='image' src={require('../../img/hope9.jpg')} fluid rounded />
                  </div>
                  <div>
                    <Image className='image' src={require('../../img/formation.JPG')} fluid rounded />
                  </div>
                </Slider>
              </Fade>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol xl='7' lg='7' md='12' sm='12' xs='12'>

              <Slider className='card_formation'
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={1}
                swipeToSlide
                focusOnSelect
              >
                <div>
                  <Card className='card_color'>
                    <Card.Text className='text-left text-white pt-2 px-5'>
                      <h3 className='text-white'>Title</h3>
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                    </Card.Text>
                  </Card>
                </div>
                <div>
                  <Card className='card_color'>
                    <Card.Text className='text-left text-white pt-2 px-5'>
                      <h3 className='text-white'>Title</h3>
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                    </Card.Text>
                  </Card>
                </div>
                <div>
                  <Card className='card_color'>
                    <Card.Text className='text-left text-white pt-2 px-5'>
                      <h3 className='text-white'>Title</h3>
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                    </Card.Text>
                  </Card>
                </div>
                <div>
                  <Card className='card_color'>
                    <Card.Text className='text-left text-white pt-2 px-5'>
                      <h3 className='text-white'>Title</h3>
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation
                    </Card.Text>
                  </Card>
                </div>
                <div>
                  <Card className='card_color'>
                    <Card.Text className='text-left text-white pt-2 px-5'>
                      <h3 className='text-white'>Title</h3>
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                    </Card.Text>
                  </Card>
                </div>
                <div>
                  <Card className='card_color'>
                    <Card.Text className='text-left text-white pt-2 px-5'>
                      <h3 className='text-white'>Title</h3>
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                      AnthroPi est un organisme de formation à la communication et à l’appel téléphonique utilisant un simulateur de conversation .
                    </Card.Text>
                  </Card>
                </div>
              </Slider>

            </MDBCol>

            {/* <button aria-hidden='true' className='carousel-control-prev-icon' />
            <button className='slickNext' /> */}
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}
export default Formations
