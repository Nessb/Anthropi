import React, { Component } from 'react'
import AdminForm from './AdminForm'
import './Admin.css'
// Firebase
import * as firebase from 'firebase'


class Admin extends Component {

    state = {
    //user identifiant
    uid: null,
    //propriétaire de la bdd
    owner: null
  }
  // Laisse le dernier utilisateur connecter
  componentDidMount () {
    const user = firebase.auth().currentUser
    //  console.log(user)
    if (user) {
      this.authHandler(user)
    }
  }

  authenticate = event => {
    //Ne recharge pas la page
    event.preventDefault()
    console.log(this.mail.value, this.password.value)
    firebase.auth().signInWithEmailAndPassword(this.mail.value, this.password.value)
      .then(user => this.authHandler(user) )
  }  

  authHandler = user => {
    const ref = firebase.database().ref('test/owner')
    ref.on('value', snapshot => {
      this.setState({
        uid: firebase.auth().currentUser.uid,
        // uid: user.uid,
        owner: snapshot.val()
      })
    })
  }

    //Se déconnecter
    logout = () => {
        firebase.auth().signOut()
            .then(this.setState({ uid: null }))
    }

  renderLogin = () => (
    <div className='admin'>
      <header className='adminheader'>
        <h1 className='adminh1'>Administration</h1>
      </header>
      <br />
      <section className='text-center'>
        <form onSubmit={this.authenticate}>
          <label htmlFor="email">Email : </label>
          <input className='mx-2' placeholder='example@.com' type='email' ref={input => this.mail = input} />
          <label className='mt-3' htmlFor="password">Mot de passe : </label>
          <input placeholder='*******' type='password' ref={input => this.password = input} />
          <br/>
          <button className='mt-3' type='submit'>Se connecter</button>
        </form>
      </section>
      <br />
    </div>
  )


  render () {
    // si il n'y a pas de connexion
    if (!this.state.uid) {
      return this.renderLogin()
    }

    if (this.state.uid !== this.state.owner) {
      return this.renderLogin()
    }

    const form = Object.keys(this.props.data.contact).map(key => (
      <AdminForm key={key} id={key} data={this.props.data.contact[key]} />
    ))
    return (
      <div className='admin'>
        <header className='adminheader'>
          <h1 className='adminh1'>Administration</h1>
        </header>
        <br />
        {form}
        <br />
        <footer>
          <button onClick={this.logout}>Se déconnecter</button>
        </footer>
      </div>
    )
  }
}
export default Admin
