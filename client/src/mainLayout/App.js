import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { Route,  Redirect } from "react-router-dom"
import Footer from './Footer';
import NavBar from './NavBar';
import PageLogin from '../pages/PageLogin';
import PageHome from '../pages/PageHome';
import PageApri from '../pages/PageApri';
import PageTestTime from '../pages/PageTestTime';
import PageTestDistance from '../pages/PageTestDistance';
import PageUpdate from '../pages/PageUpdate';


class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getUsuarios = this.getUsuarios.bind(this)
    this.getUsuario = this.getUsuario.bind(this)
  }

  componentDidMount () {
    this.getUsuarios()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getUsuarios () {
    this.fetch('usuarios')
      .then(usuarios => {
        if (usuarios.length) {
          this.setState({usuarios: usuarios})
          this.getUsuario(usuarios[0].id)
        } else {
          this.setState({usuarios: []})
        }
      })
  }

  getUsuario (id) {
    this.fetch(`usuarios/${id}`)
      .then(usuario => this.setState({usuario: usuario}))
  }

  render () {
    let {usuarios, usuario} = this.state
    return (
      <div id="page-top" className="App">
        <NavBar />
        <Route path="/" exact component={PageHome} />
        <Route path="/login" component={PageLogin} />
        <Route path="/apri" component={PageApri} />
        <Route path="/test_time" component={PageTestTime} />
        <Route path="/cooper" component={PageTestDistance} />
        <Route path="/update" component={PageUpdate} />
        <Footer />
      </div>
  );
      
  }
}

export default App