import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
//import gql from "graphql-tag";
//import GlRequest from '../graphQLUtils'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ActionsType } from "../reducers";
import axios from 'axios';
import Popup from 'react-popup';


export default class PageTestTime extends Component {
  constructor(props) {
    super(props);
    this.onChangeSexo = this.onChangeSexo.bind(this);
    this.onChangeEdad = this.onChangeEdad.bind(this);
    this.onChangePeso = this.onChangePeso.bind(this);
    this.onChangeTiempo = this.onChangeTiempo.bind(this);
    this.onChangeFC = this.onChangeFC.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id: '',
      sexo: '',
      edad: '',
      peso: '',
      tiempo: '',
      fc: '',
    }
  }

  componentDidMount() {
    axios.get('usuarios/1')
        .then(response => {
            this.setState({ 
              sexo: response.data.sexo,
              edad: response.data.edad,
              peso: response.data.peso,
              tiempo: response.data.tiempo,
              fc: response.data.fc});
        })
        .catch(function (error) {
            console.log(error.response.header);
        })
  }

  onChangeSexo(e) {
    this.setState({
      sexo: e.target.value
    });
  }
  onChangeEdad(e) {
    this.setState({
      edad: e.target.value
    });
  }
  onChangeTiempo(e) {
    this.setState({
      tiempo: e.target.value
    });
  }
  onChangePeso(e) {
    this.setState({
      peso: e.target.value
    });
  }
  onChangeFC(e) {
    this.setState({
      fc: e.target.value
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      sexo: this.state.sexo,
      edad: this.state.edad,
      peso: this.state.peso,
      tiempo: this.state.tiempo,
      fc: this.state.fc,
    };
    axios.post('usuarios/update/1', obj)
        .then(res => console.log(res.json()));
    
    this.props.history.push('/apri');
  }

  render() {
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
              </div>
            </div>
          </div>
          <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={this.onSubmit} >
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Sexo</label>
            <input className="form-control text-center" type="text" placeholder="Sexo: 1:hombre / 0:mujer" onChange={this.onChangeSexo} />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Edad</label>
            <input className="form-control text-center" type="text" placeholder="Edad" onChange={this.onChangeEdad} />

          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Peso</label>
            <input className="form-control text-center" type="text" placeholder="Peso(kg)" onChange={this.onChangePeso} />

          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Tiempo en minutos</label>
            <input className="form-control text-center" type="text"  placeholder="Tiempo(minutos)" onChange={this.onChangeTiempo} />

          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Frecuencia cardiaca</label>
            <input className="form-control text-center" type="text" placeholder="Frecuencia cardiaca" onChange={this.onChangeFC} />

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
