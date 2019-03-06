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
      edad: '',
      peso: '',
      tiempo: '',
      fc: '',
      answer: '',
      passError: [],
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = this.state.id;
    const pass = this.state.pass;
    const edad = this.state.edad;
    const peso = this.state.peso;
    const tiempo = this.state.tiempo;
    const fc = this.state.fc;

    if (!id || id.length < 1) {
      this.setState({ idError: 'Usuario Invalido' })
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

  handleEdadChange(event) {
    this.setState({ edad: event.target.value });
  }

  handlePesoChange(event) {
    this.setState({ peso: event.target.value });
  }

  handleTiempoChange(event) {
    this.setState({ tiempo: event.target.value });
  }

  handleFcChange(event) {
    this.setState({ fc: event.target.value });
  }

  render() {

    return (
      <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={this.handleSubmit.bind(this)} >
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Sexo</label>
            <input className="form-control text-center" type="text" value={this.state.id} placeholder="Sexo: introduce un digito de acuerdo: 1:hombre / 0:mujer" onChange={this.handleIdChange.bind(this)} />
            <p className="help-block text-danger">{this.state.idError}</p>
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Edad</label>
            <input className="form-control text-center" type="text" value={this.state.edad} placeholder="Edad" onChange={this.handleEdadChange.bind(this)} />
            <p className="help-block text-danger">{this.state.idError}</p>
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Peso</label>
            <input className="form-control text-center" type="text" value={this.state.peso} placeholder="Peso(kg)" onChange={this.handlePesoChange.bind(this)} />
            <p className="help-block text-danger">{this.state.idError}</p>
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Tiempo en minutos</label>
            <input className="form-control text-center" type="text" value={this.state.tiempo} placeholder="Tiempo(minutos)" onChange={this.handleTiempoChange.bind(this)} />
            <p className="help-block text-danger">{this.state.idError}</p>
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Frecuencia cardiaca</label>
            <input className="form-control text-center" type="text" value={this.state.fc} placeholder="Frecuencia cardiaca" onChange={this.handleFcChange.bind(this)} />
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
            <h2 className="text-center text-uppercase text-secondary mb-0">Test de capacidad aerobica</h2>
            <br></br>
            <hr></hr>
            <br></br>
            <h3 className="text-center text-secondary mb-0">El VO2 máx es la cantidad máxima de oxígeno (O2) que el organismo puede absorber, transportar y consumir en un tiempo determinado, es la sangre que nuestro organismo puede transportar y metabolizar.</h3>
            <br></br>
            <h3 className="text-center text-secondary mb-0">Para calcularlo se propone este test, donde debes registrar el tiempo en minutos que te toma caminar 160 mts y tu frecuencia cardiaca al momento de completar dicha cantidad.</h3>
            <br></br>
            <hr></hr>
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


const PageTestTime = connect(
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

export default PageTestTime;
