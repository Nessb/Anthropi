import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// React Router
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// Components
import App from './App'
import Admin from './Admin/Admin'
import Loading from './components/Loading/Loading.js.js'
import Presentation from './components/Main/Presentation.js.js'
import SimulPhone from './components/Main/SimulPhone.js.js'
import Formations from './components/Main/Formations.js.js'
import Formateurs from './components/Main/Formateurs.js.js'
import Contact from './components/Contact/Contact.js.js'

// CSS
import './index.css'
import 'sanitize.css'

// PWA
import * as serviceWorker from './serviceWorker'

// Firebase
import * as firebase from 'firebase'
import config from './firebase'
import Navbar from './Navbar/Navbar'

class Root extends Component {
  constructor () {
    super()
    // initialiser component en lui passant la config firebase.js
    firebase.initializeApp(config)
    this.state = {
      loading: true
    }
  }

  // recupere les infos de la bdd quand le component se monte
  componentWillMount () {
    const ref = firebase.database().ref('test')

    ref.on('value', snapshot => {
      // MAJ du state
      this.setState({
        data: snapshot.val(),
        loading: false
      })
    })
  }

  render () {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <Router>
        <Switch>
          {/* Chemin exacte  */}
          <Route exact path='/' render={props => (
            <App data={this.state.data} />
          )} />
          <Route exact path='/admin' render={props => (
            <Admin data={this.state.data} />
          )} />
          <Route path='/#navbar' component={Navbar} />
          <Route path='/#presentation' component={Presentation} />
          <Route path='/#simulphone' component={SimulPhone} />
          <Route path='/#formation' component={Formations} />
          <Route path='/#formateurs' component={Formateurs} />
          <Route path='/#contact' component={Contact} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.unregister()
