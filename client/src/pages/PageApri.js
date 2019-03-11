import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
//import gql from "graphql-tag";
//import GlRequest from '../graphQLUtils'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ActionsType } from "../reducers";
import axios from 'axios';
import Popup from 'react-popup';

// minified version is also included

export default class PageApri extends Component {
  constructor(props) {
    super(props);
    this.onChangeCR = this.onChangeCR.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: '',
      coeficiente_respiratorio: '',
    }
  }

  //notify = () => toast("Datos registrados con exito!");

  componentDidMount() {
    axios.get('usuarios/1')
        .then(response => {
            this.setState({ 
              coeficiente_respiratorio: response.data.coeficiente_respiratorio});
        })
        .catch(function (error) {
            console.log(error.response.header);
        })
  }

  myFunction() {
    Popup.alert('I am alert, nice to meet you');
}
  

onChangeCR(e) {
  this.setState({
    coeficiente_respiratorio: e.target.value
  });
}


onSubmit(e) {
  e.preventDefault();
  const obj = {
    coeficiente_respiratorio: this.state.coeficiente_respiratorio,
  };
  axios.post('usuarios/update/1', obj)
      .then(res => console.log(res.json()));
  
  this.props.history.push('/diets/');
}

  render() {

    return(
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
            </div>
          </div>
        </div>
        <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={this.onSubmit} >
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Valor CO2</label>
            <input className="form-control text-center" type="text"  placeholder="Valor CO2" onChange={this.onChangeCR} />
          </div>
        </div>

        <br />
        <div id="success"></div>
        <div className="form-group text-center">
        <button onClick= {() => {alert('Datos recibidos con exito');}} type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Enviar</button>
        </div>
      </form>
      </section>
    )
  }
}

