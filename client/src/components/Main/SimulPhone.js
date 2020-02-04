import React, { Component } from 'react'
import './SimulPhone.css'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { MDBContainer, MDBRow, MDBCol, MDBView } from 'mdbreact'
import Fade from 'react-reveal/Fade'

class SimulPhone extends Component {
  render () {
    return (
      <MDBContainer fluid id='simulphone' className='mb-5'>
        <MDBRow className=''>
          <h1 className='simulphone mx-5 mt-5'>
            <Fade left cascade>
              SimulPhone
            </Fade>
          </h1>
          <MDBCol lg='7' md='7' xl='7' className='offset-lg-5 offset-xl-5'>
            <Fade right duration={1000} delay={1000}>
              <MDBView hover zoom>
                <Image src={require('../../img/laptop_mini.jpg')} className='image' fluid thumbnail />
              </MDBView>
            </Fade>
          </MDBCol>
        </MDBRow>
        <MDBRow className='espace'>
          <MDBCol lg='6' md='7' xl='6' className='offset-lg-1 offset-xl-1'>
            <Fade left duration={1000} delay={1500}>
              <Card id='cardsimulphone1' className='card1 hoverable'>
                <Card.Text className='cardtext text-left py-5 px-3'>
                  <ul>
                    <li>Le SimulPhone® développé et commercialisé par Anthropi est un simulateur d’appels innovant et unique.</li>                  
                    <li>Son objectif premier est l’aide à la formation des personnes utilisant le téléphone dans un cadre professionnel.</li>
                    <li>SimulPhone® est un outil technologique, mais c’est avant tout une aventure humaine qui rassemble autour d’elle des professionnels unis par des valeurs et des objectifs communs.</li>
                  </ul>
                </Card.Text>
              </Card>
            </Fade>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-8'>
          <MDBCol lg='7' md='7' xl='7' className='offset-xl-0.5'>
            <Fade left duration={1000} delay={1000}>
              <MDBView hover zoom>
                <Image src={require('../../img/pompier_mini.jpg')} className='image' fluid thumbnail />
              </MDBView>
            </Fade>
          </MDBCol>
        </MDBRow>
        <MDBRow className='espace'>
          <MDBCol lg='6' md='7' xl='6' className='offset-lg-5 offset-xl-5'>
            <Fade right duration={1000} delay={1500}>
              <Card id='cardsimulphone2' className='card1 hoverable'>
                <Card.Text className='text-left py-5 px-3'>
                  <ul>
                    <li>Les formations sur SimulPhone® sont in-situ et plongent le professionnel dans un environnement réaliste et encadré.</li>
                    <li>Il permet de simuler des appels communs comme la gestion d’un requérant/client agressif, des scénarios en lien avec l’actualité, des scénarios de crise.</li>
                    <li>La création de scénarios est personnalisable à souhait.</li>
                  </ul>
                </Card.Text>
              </Card>
            </Fade>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-8'>
          <MDBCol lg='7' md='7' xl='7' className='offset-lg-5 offset-xl-5'>
            <Fade right duration={1000} delay={1000}>
              <MDBView hover zoom>
                <Image src={require('../../img/chu_mini.jpg')} className='image' fluid thumbnail />
              </MDBView>
            </Fade>
          </MDBCol>
        </MDBRow>
        <MDBRow className='espace'>
          <MDBCol lg='6' md='7' xl='6' className='offset-lg-1'>
            <Fade left duration={1000} delay={1500}>
              <Card id='cardsimulphone3' className='card1 hoverable'>
                <Card.Text className='text-left py-5 px-3'>
                  <ul>
                    <li>Le SimulPhone® est capable de faire une analyse cognitive de chaque appel et permettre aux professionnels de mettre en lumière et d’améliorer les compétences utilisées.</li>
                    <li>Cet outil d’analyse est à destination du professionnel avant tout, et peut-être mis à la disposition de la hiérarchie.</li>
                  </ul>
                </Card.Text>
              </Card>
            </Fade>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-8'>
          <MDBCol lg='7' md='7' xl='7' className='offset-xl-0.5'>
            <Fade left duration={1000} delay={1000}>
              <MDBView hover zoom>
                <Image src={require('../../img/pompier3_mini.jpg')} className='image' fluid thumbnail />
              </MDBView>
            </Fade>
          </MDBCol>
        </MDBRow>
        <MDBRow className='espace mb-6'>
          <MDBCol lg='6' md='7' xl='6' className='offset-lg-5 offset-xl-5'>
            <Fade right duration={1000} delay={1500}>
              <Card id='cardsimulphone4' className='card1 hoverable'>
                <Card.Text className='text-left py-5 px-3'>
                  <ul>
                    <li>Notre simulateur nous permet également de faire des recherches scientifiques en partenariat avec des laboratoires comme l’IRCAM (CNRS) et le LEAD.</li>
                    <li>L’ensemble des résultats de nos recherches sont intégrés dans le SimulPhone®.</li>
                    <li>Vous pouvez bénéficier de nos recherches ou faire partie de l’équipe de recherche.</li>
                  </ul>
                </Card.Text>
              </Card>
            </Fade>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
export default SimulPhone
