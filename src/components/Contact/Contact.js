import React from 'react'
import './Contact.css'
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact'
import Fade from 'react-reveal/Fade'

const Contact = props => {
  return (
    <section id='contact' className='my-5 heavy-rain-gradient'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>
        <Fade left cascade delay={1000}>
            Contact
        </Fade>
      </h2>
      <Fade delay={1500}>
        <p className='text-center w-responsive mx-auto pb-5'>
          Pour nous contacter, merci de remplir le formulaire ci-dessous, nous y répondrons dans les meilleurs délais.
        </p>
      </Fade>
      <MDBRow id='row'>

        <Fade delay={1000}>
          <MDBCol className='infos-adresse'>
            <MDBBtn tag='a' className='gris-bleu'>
              <MDBIcon icon='map-marker-alt' />
            </MDBBtn>
            <p>{props.details.adresse.content}</p>
            <p className='mb-md-0'>{props.details.cp.content} {props.details.ville.content}</p>
          </MDBCol>
          <MDBCol className='infos-contact'>
            <MDBBtn tag='a' className='gris-bleu' >
              <MDBIcon icon='phone' />
            </MDBBtn>
            <p>{props.details.nom.content}</p>
            <p><a id='num' href={`tel:${props.details.tel.content}`} >{props.details.tel.content}</a></p>
            <p className='mb-md-0'>{props.details.horaire.content}</p>
            <br />
          </MDBCol>
        </Fade>
      </MDBRow>

      <MDBCol>

        <Fade right delay={1200}>
          <div
            id='map-container'
            className='rounded z-depth-1-half map-container'
            style={{ height: '20em', width: '50em' }}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.02498723573!2d5.076087615664372!3d47.31385037916632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29e402dc7880f%3A0x60bfea55458c7d89!2s64e+Rue+Sully%2C+21000+Dijon!5e0!3m2!1sfr!2sfr!4v1531920646846'
              title='This is a unique title'
              width='100%'
              height='100%'
              frameBorder='0'
              style={{ border: 0 }}
            />
          </div>
          <br />
        </Fade>
      </MDBCol>

    </section>

  )
}

export default Contact
