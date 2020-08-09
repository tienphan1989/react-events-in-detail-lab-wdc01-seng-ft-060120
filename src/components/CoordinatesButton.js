import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleClick = (event) => {
        console.log(event)
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return <button onClick={this.handleClick}>Coords</button>;
    }
}

