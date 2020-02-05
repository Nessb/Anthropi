import React, { Component } from 'react'
import Slider from 'react-slick'
import './References.css'
import Image from 'react-bootstrap/Image'
import Fade from 'react-reveal/Fade'

class References extends Component {
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
      <div id='references' className='center'>
        <h2>
          <Fade left cascade>
                Nos Références
          </Fade>
        </h2>
        <Slider className='mt-5' {...settings}>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/wresize/es-asur.png')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/SAMU 02.png')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/wresize/SAMU 10.png')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/SAMU 25.jpeg')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/wresize/SDIS 55.jpg')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/wresize/SAMU 40.jpeg')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/SDIS 56.png')}  />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/SAMU 80.png')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/SDIS 58.jpg')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/SAMU 82.png')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/wresize/SDIS13.jpg')} />
          </div>
          <div>
            <Image className='imagereferences' src={require('../../img/Références/wresize/SDIS 03.jpg')} />
          </div>
        </Slider>
      </div>
    )
  }
}
export default References
