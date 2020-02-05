import React, { Component } from 'react'
import './Avis.css'
import Container from 'react-bootstrap/Container'
import Flip from 'react-reveal/Flip'

class Avis extends Component {
  render () {
    return (
      <Flip top duration={1500} delay={1500}>
        <Container className='mb-5 mt-5'>
          <div id='avis' className='card card-image mb-5' >
            <div className='text-white text-center d-flex align-items-center py-5 px-4'>
              <div>
                <p><i className='fas fa-quote-left' />  Excellente formation qui a permis a toute l'équipe du SAMU 40 ( ARM et Médecins régulateurs) d'acquérir ou revoir ses techniques de communications pour améliorer la réponse du CRRA 15 aux appels d'urgences{' '}
                  <i className='fas fa-quote-right' /></p>
                <h5> <i className='fas fa-briefcase-medical' /> Gilles Blaquières, Directeur SAMU 40 </h5>
              </div>
            </div>
          </div>
        </Container>
      </Flip>
    )
  }
}

export default Avis
