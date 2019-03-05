import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../logo.png';
import logoA from '../Aprimar.png';


class ComponentPageHome extends Component {

  landing(){
    return (
      <header className="masthead bg-info text-black text-center">
        <div className="container">
          <div className="wrap">
              <img src={logoA}  className="img-fluid" alt="Responsive image" />
          </div>
          <h1 className="text-uppercase mb-0">Apri</h1>
          <h2 className="font-weight-light mb-0"> Aprende a alimentarte sanamente</h2>
        </div>
      </header>


    );
  }

  render() {
    return this.landing();
  }
}

const PageHome = connect(
  state => ({
    isAuthenticated: state.authReducers.isAuthenticated,
  })
)(ComponentPageHome)


export default PageHome;