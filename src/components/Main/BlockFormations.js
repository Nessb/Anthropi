import React from 'react'
import './BlockFormations.css'
import { Container, Row, Col } from 'react-bootstrap'
import Flip from 'react-reveal/Flip'
import axios from 'axios'

class BlockFormations extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      tel: '',
      email: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('C\'est validé penser à vérifier votre boite mail.')
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert('Échec de l\'envoie du formulaire.')
      }
    })
  }

  resetForm () {
    this.setState({ name: '', tel: '', email: '' })
  }

  render () {
    return (
      <Container className='mb-5 mt-5' id='blockformation'>
        <Flip top duration={1500} delay={1500}>
          <h4>Entrez votre email dans le formulaire ci-dessous, et vous recevrez le catalogue de formation en pièce jointe</h4>
          <form className='contact-form mt-5' onSubmit={this.handleSubmit.bind(this)} method='POST'>
            <Row>
              <Col className='flex-center mb-4'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='md-form  mt-0'>
                      <input type='text' id='name' className='form-control' placeholder='Prénom' value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                      <label htmlFor='name' />
                    </div>
                    <div className='md-form'>
                      <input type='tel' id='tel' className='form-control' placeholder='Numéro de téléphone' value={this.state.tel} onChange={this.onTelChange.bind(this)} />
                      <label htmlFor='tel' />
                    </div>
                    <div className='md-form'>
                      <input type='email' id='email' className='form-control' placeholder='Email' value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
                      <label htmlFor='email' />
                    </div>
                    <button type='submit' id='btncolor' className='btn btn-md btn-block ml-0 mb-0 text-white'>Envoyez</button> 
                    <p style={{ fontSize: '0.5em' }}>
                      Aucun abonnement à une newsletter.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </Flip>
      </Container>

    )
  }

  onNameChange (event) {
    this.setState({ name: event.target.value })
  }

  onTelChange (event) {
    this.setState({ tel: event.target.value })
  }

  onEmailChange (event) {
    this.setState({ email: event.target.value })
  }
}

export default BlockFormations
