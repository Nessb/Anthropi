import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar.js'
import Presentation from './components/Main/Presentation.js'
import Block from './components/Main/Block.js'
import SimulPhone from './components/Main/SimulPhone.js'
import BlockFormations from './components/Main/BlockFormations.js'
import Partenaires from './components/Main/Partenaires.js'
import Formations from './components/Main/Formations.js'
import Avis from './components/Main/Avis.js'
// import References from './components/Main/References.js'
import Formateurs from './components/Main/Formateurs.js'
import Contact from './components/Contact/Contact.js'
import Footer from './components/Footer/Footer.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

const App = props => {
  const contact = Object.keys(props.data.contact).map(key => (
    <Contact key={key} details={props.data.contact[key]} />
  ))
  console.log(contact)
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <Presentation />
        <Block />
        <SimulPhone />
        <Partenaires />
        <BlockFormations />
        <Formations />
        <Avis />
        {/* <References /> */}
        <Formateurs />
        <Contact details={props.data.contact} />
      </header>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>

  )
}

export default App
