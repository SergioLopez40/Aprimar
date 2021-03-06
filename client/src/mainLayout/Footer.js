import React, { Component } from 'react';


class Info extends Component {
    render() {
        return (
            <div className="col-md-4 m-auto">
                
                <p className="lead mb-0">Proyecto TPI 2018-II</p>
                <p>Universidad Nacional de Colombia</p>
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <Info />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
