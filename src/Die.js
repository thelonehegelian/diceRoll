import React, { Component } from 'react'
import './Die.css'

export default class Die extends Component {
    render() {
        return (
            <React.Fragment >
                <i className = {`fas fa-dice-${this.props.face} Die`}></i>
            </React.Fragment>
        )
    }
}
