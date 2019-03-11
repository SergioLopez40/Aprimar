import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';

Popup.alert('Datos recibidos con exito');

class popup extends Component {
    render() {
        return (
            <div>
            <Popup />
            </div>
        );
    }
}

export default popup;
