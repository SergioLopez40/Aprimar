import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'


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
    return usuarios
      ? <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            Lista de usuarios
          </Header.Content>
        </Header>
        <Divider section />
        {usuario &&
          <Container>
            <Header as='h2'>{usuario.title}</Header>
            {usuario.nombre && <p>{usuario.nombre}</p>}
            {usuario.vo_max}
            {usuario.steps && <p>{usuario.steps}</p>}
            {usuario.source && <Button basic size='tiny' color='teal' href={usuario.source}>Source</Button>}
          </Container>
        }
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default App