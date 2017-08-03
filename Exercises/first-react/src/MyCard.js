import React, { Component } from 'react';
import './App.css'

class MyCard extends Component {

    render(){
        return(
            <div className="Card">
                <div className="CardImg">

                </div>
                <div className="CardContent">
                    <h3>Mi Nombre</h3>
                    <p>Pepito Perez</p>
                </div>
            </div>
        );
    }
}

export default MyCard;