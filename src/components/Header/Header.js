import React, { Component } from 'react'

import './Header.scss'

export default class Header extends Component {

    state = {
        header: 'Header!'
    }

    click = () => {
        this.setState({
            header: 'Click'
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.header}</h2>
                <button onClick={this.click}>Click</button>
            </div>
        )
    }
}