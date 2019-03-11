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
// import 'react-toastify/dist/ReactToastify.min.css';
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default class PageSensor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      descripcion: '',
      instrucciones: '',
      ingredientes: '',
      pag: 1,
    }
  }

  //notify = () => toast("Datos registrados con exito!");
  //axios.get('diets/'+this.props.match.params.id)

  componentDidMount() {
    axios.get('/diets/'+ getRandomArbitrary(1,10))
        .then(response => {
            this.setState({ 
              descripcion: response.data.descripcion,
              instrucciones: response.data.instrucciones,
              ingredientes: response.data.ingredientes});
        })
        .catch(function (error) {
            console.log(error.response.header);
        })
  }

  myFunction() {
    Popup.alert('I am alert, nice to meet you');
}
  
  render() {

    return(
      <section id="contact" style={{ "paddingTop": "calc(6rem + 72px)" }}>
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Dieta Sugerida</h2>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 className="text-center text-secondary mb-0">{this.state.descripcion}</h3>
          <br></br>
          <h3 className="text-center text-secondary mb-0">{this.state.instrucciones}</h3>
          <br></br>
          <h3 className="text-center text-secondary mb-0">{this.state.ingredientes}</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <hr className="star-dark mb-5" />

          <div className="row">
            <div className="col-lg-8 mx-auto">
            </div>
          </div>
        </div>
      </section>
    )
  }
}

