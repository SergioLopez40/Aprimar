import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
//import gql from "graphql-tag";
//import GlRequest from '../graphQLUtils'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ActionsType } from "../reducers";
import axios from 'axios';


export default class PageTestDistanceP extends Component {
  constructor(props) {
    super(props);
    this.onChangeDistancia = this.onChangeDistancia.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: '',
      distancia: '',
    }
  }

  componentDidMount() {
    axios.get('usuarios/1')
        .then(response => {
            this.setState({ 
              distancia: response.data.distancia});
        })
        .catch(function (error) {
            console.log(error.response.header);
        })
  }

onChangeDistancia(e) {
  this.setState({
    distancia: e.target.value
  });
}

onSubmit(e) {
  e.preventDefault();
  const obj = {
    distancia: this.state.distancia,
  };
  axios.post('usuarios/update/1', obj)
      .then(res => console.log(res.json()));
  
  this.props.history.push('/cooper');
}

  render() {

    return (
      <section id="contact" style={{ "paddingTop": "calc(6rem + 72px)" }}>
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Test de Cooper</h2>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 className="text-center text-secondary mb-0">El VO2 máx es la cantidad máxima de oxígeno (O2) que el organismo puede absorber, transportar y consumir en un tiempo determinado, es la sangre que nuestro organismo puede transportar y metabolizar.</h3>
          <br></br>
          <h3 className="text-center text-secondary mb-0">Para calcularlo se propone este test, donde debes correr a una velocidad constante durante 12 minutos y debes indicarnos la distancia recorrida(mts) durante ese tiempo.</h3>
          <br></br>
          <h3 className="text-center text-secondary mb-0">Si sufres de asma, hipertensión, alguna enfermedad cardiovascular o algún problema respiratorio NO REALICES ESTA PRUEBA!!, te recomendamos usar nuestro test de capacidad aerobica</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <hr className="star-dark mb-5" />

          <div className="row">
            <div className="col-lg-8 mx-auto">
            </div>
          </div>
        </div>


      <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={this.onSubmit} >
        <div className="group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Distancia</label>
            <input className="form-control text-center" type="text" value={this.state.distancia} placeholder="Distancia recorrida" onChange={this.onChangeDistancia} />
          </div>
        </div>
        <br />
        <div id="success"></div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Enviar</button>
        </div>
      </form>
      </section>
    )
  }
}

