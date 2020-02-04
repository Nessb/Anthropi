import React, { Component } from 'react'
import Slider from 'react-slick'
import './Partenaires.css'
import Image from 'react-bootstrap/Image'
import Fade from 'react-reveal/Fade'

class Partenaires extends Component {
  render () {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: 'linear'
    }
    return (
      <div id='partenaire' className='center'>
        <h2>
          <Fade left cascade>
                Nos Partenaires
          </Fade>
        </h2>
        <Slider {...settings}>
          <div className='pxref'>
            <Image src={require('../../img/Partenaires/banque.jpg')} fluid />
          </div>
          <div className='pxref'>
            <Image src={require('../../img/Partenaires/la-french-tech.png')} fluid />
          </div>
          <div className='pxref'>
            <Image src={require('../../img/Partenaires/initiative-cote-dor.png')} fluid />
          </div>
          <div className='pxref'>
            <Image src={require('../../img/Partenaires/laureat-bourgogne.png')} fluid />
          </div>
          <div className='pxref'>
            <Image src={require('../../img/Partenaires/bfc.png')} fluid />
          </div>
        </Slider>
      </div>
    )
  }
}
export default Partenaires
