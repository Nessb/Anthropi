import React, { Component } from 'react'

// Firebase
import * as firebase from 'firebase'

class AdminForm extends Component {
// Initialiser le component lorsqu'il se créé en lui passsant des infos
  constructor (props) {
    super(props)
    const data = this.props.data
    this.state = { data }
  }

    //enregistrer l'etat actuelle avant changement
    componentDidUpdate () {
        this.updateContent()
      }

 //MAJ Contenu
 updateContent = () => {
    firebase.database().ref(`test/contact/${this.props.id}`).set({
    ...this.state.data
    })
  }  
    //fonction pour recuperer les infos input
    handleChange = event => {
        //Copie de data
        const data = {...this.state.data}
        //Modifier le content
        data.content = event.target.value
        // Maj data
        this.setState({ data })
      }

  render () {
    return (
      <section>
      <p>Remplir les champs</p>
        <input placeholder='Tapez votre texte'
          
          value={this.state.data.content}
           // Event pour lancer fonction lors d'un changement du input
           onChange={this.handleChange}
        />
      </section>
    )
  }
}
export default AdminForm
