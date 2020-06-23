import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'

export default class Header extends Component {

    state = {
        header: 'Header!'
    }

    click = () => {
        this.setState( {
            header: 'Click'
        } )
    }

    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <h2 className='header-title'>Новостник</h2>
                        </div>
                        <div className="col-4 ml-auto">
                            <ul className="menu d-flex justify-content-end">
                                <li className='menu__item'>
                                    <Link to='/'>Главная</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/news'>Новости</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/contact'>Контакты</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}