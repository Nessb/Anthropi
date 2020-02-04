import React, { Component } from 'react'
import './Formateurs.css'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBContainer, MDBView } from 'mdbreact'
import Fade from 'react-reveal/Fade'

class Formateurs extends Component {
  render () {
    return (
      <section id='formateurs'>
        <h1 className='mb-5'>
          <Fade left cascade delay={1000}>
                Nos Formateurs
          </Fade>
        </h1>
        <MDBContainer id='formateurscard'>
          <Fade bottom delay={1600}>
            <MDBCard className='fcard hoverable'>
              <MDBView hover zoom>
                <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg' waves />
              </MDBView>
              <MDBCardBody>
                <h5>Laurent Boidron <br />  CEO</h5>
                <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
                </MDBCardText>
                <div style={{ fontSize: '2.5rem' }}>
                  <i class='fab fa-facebook-square fa-fw blue-text' />
                  <i class='fab fa-twitter-square fa-fw blue-text' />
                  <i class='fab fa-linkedin fa-fw blue-text' />
                </div>
              </MDBCardBody>
            </MDBCard>
          </Fade>
          <Fade top delay={1800}>
            <MDBCard className='fcard hoverable mt-7' id='item'>
              <MDBView hover zoom>
                <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg' waves />
              </MDBView>
              <MDBCardBody>
                <h5>Jérôme Rousselet Training Officer</h5>
                <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
                </MDBCardText>
                <div style={{ fontSize: '2.5rem' }}>
                  <i class='fab fa-facebook-square fa-fw blue-text' />
                  <i class='fab fa-twitter-square fa-fw blue-text' />
                  <i class='fab fa-linkedin fa-fw blue-text' />
                </div>
              </MDBCardBody>
            </MDBCard>
          </Fade>
          <Fade bottom delay={2000}>
            <MDBCard className='fcard hoverable'>
              <MDBView hover zoom>
                <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg' waves />
              </MDBView>
              <MDBCardBody>
                <h5>Morgane Lacroix Pedagogy Officer</h5>
                <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
                </MDBCardText>
                <div style={{ fontSize: '2.5rem' }}>
                  <i class='fab fa-facebook-square fa-fw blue-text' />
                  <i class='fab fa-twitter-square fa-fw blue-text' />
                  <i class='fab fa-linkedin fa-fw blue-text' />
                </div>
              </MDBCardBody>
            </MDBCard>
          </Fade>
          <Fade top delay={2200}>
            <MDBCard className='fcard hoverable mt-7'>
              <MDBView hover zoom>
                <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg' waves />
              </MDBView>
              <MDBCardBody>
                <h5>Florent Da Rocha Business Developer</h5>
                <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
                </MDBCardText>
                <div style={{ fontSize: '2.5rem' }}>
                  <i class='fab fa-facebook-square fa-fw blue-text' />
                  <i class='fab fa-twitter-square fa-fw blue-text' />
                  <i class='fab fa-linkedin fa-fw blue-text' />
                </div>
              </MDBCardBody>
            </MDBCard>
          </Fade>
          <Fade bottom delay={2400}>
            <MDBCard className='fcard hoverable'>
              <MDBView hover zoom>
                <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg' waves />
              </MDBView>
              <MDBCardBody>
                <h5>Olivier Bisson Commercial</h5>
                <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
                </MDBCardText>
                <div style={{ fontSize: '2.5rem' }}>
                  <i class='fab fa-facebook-square fa-fw blue-text' />
                  <i class='fab fa-twitter-square fa-fw blue-text' />
                  <i class='fab fa-linkedin fa-fw blue-text' />
                </div>
              </MDBCardBody>
            </MDBCard>
          </Fade>
          <Fade top delay={2600}>
            <MDBCard className='fcard hoverable mt-7'>
              <MDBView hover zoom>
                <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg' waves />
              </MDBView>
              <MDBCardBody>
                <h5>Louise Michel Programmer</h5>
                <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
                </MDBCardText>
                <div style={{ fontSize: '2.5rem' }}>
                  <i class='fab fa-facebook-square fa-fw blue-text' />
                  <i class='fab fa-twitter-square fa-fw blue-text' />
                  <i class='fab fa-linkedin fa-fw blue-text' />
                </div>
              </MDBCardBody>
            </MDBCard>
          </Fade>
          <Fade bottom delay={2800}>
            <MDBCard className='fcard hoverable'>
              <MDBView hover zoom>
                <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg' waves />
              </MDBView>
              <MDBCardBody>
                <h5>Richard Lardry <br /> Sound Officer</h5>
                <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
                </MDBCardText>
                <div style={{ fontSize: '2.5rem' }}>
                  <i class='fab fa-facebook-square fa-fw blue-text' />
                  <i class='fab fa-twitter-square fa-fw blue-text' />
                  <i class='fab fa-linkedin fa-fw blue-text' />
                </div>
              </MDBCardBody>
            </MDBCard>
          </Fade>
        </MDBContainer>
      </section>
    )
  }
}

export default Formateurs
