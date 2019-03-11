import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
//import gql from "graphql-tag";
//import GlRequest from '../graphQLUtils'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ActionsType } from "../reducers";


class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pass: '',
      answer: '',
      passError: [],
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = this.state.id;
    const pass = this.state.pass;

    if (!id || id.length < 1) {
      this.setState({ idError: 'Valor Invalido' })
      return;
    }

    if (!pass || pass.length < 1) {
      this.setState({ passError: 'Identificacion no valida' })
      return;
    }

  }

  handleIdChange(event) {
    this.setState({ id: event.target.value });
  }

  handlePassChange(event) {
    this.setState({ pass: event.target.value });
  }

  render() {

    return (
      <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={this.handleSubmit.bind(this)} >
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Valor CO2</label>
            <input className="form-control text-center" type="text" value={this.state.id} placeholder="Valor CO2" onChange={this.handleIdChange.bind(this)} />
            <p className="help-block text-danger">{this.state.idError}</p>
          </div>
        </div>

        <br />
        <div id="success"></div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Enviar</button>
        </div>
      </form>
    );
  }
}

class Login extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <section id="contact" style={{ "paddingTop": "calc(6rem + 72px)" }}>
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Veamos tu estado actual..</h2>
          <br></br>
          <br></br>
            <hr></hr>
          <h3 className="text-center text-secondary mb-0">Para mejorar la precision se recomienda realizar alguna de las dos pruebas: Test de Cooper / Test de capacidad aerobica.</h3>
          <br></br>
          <h3 className="text-center text-secondary mb-0">Ahora, usaras tu dispositivo: exhala durante 3 segundos y oprime el boton mientras lo haces</h3>
          <br></br>
          <h3 className="text-center text-uppercase text-secondary mb-0">Muy bien!! Ya falta poco!</h3>
          <h3 className="text-center text-secondary mb-0">Introduce el valor registrado </h3>
          <hr className="star-dark mb-5" />

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Formulario onSubmit={this.props.login}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const PageApri = connect(
  state => ({
    isAuthenticated: state.authReducers.isAuthenticated,
  }),
  dispatch => ({
    login: (info) => {
      dispatch({
        type: ActionsType.LOGIN,
        payload: info,
      })
      dispatch(push('/login'))
    }
  })
)(Login)

export default PageApri;
