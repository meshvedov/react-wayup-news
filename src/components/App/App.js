import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import '../SCSS/style.scss'
import Header from '../Header'
import Footer from '../Footer'
import News from '../News'
import Error from '../Error'

import { getData } from '../Client/Client'
import Contacts from '../Contacts';
import SingleNews from '../SingleNews'
import contacts from '../../config/contactsConfig';

class App extends React.Component {

    state = {
        news: []
    }

    componentDidMount() {
        getData().then(
            data => {
                this.setState( {
                    news: data
                } )
                console.log( data )
            }
        )
    }

    singleNews = () => {
        return this.state.news.map( (item, i) => (
            <Route exact={true} path={`/news/${i}`} key={i}>
                <SingleNews
                    {...item}
                />
            </Route>
        ) )
    }

    sliceNews = (n = 6) => {
        return this.state.news.slice( 0, n )
    }

    render() {
        return (
            <Router>
                <Header/>

                <Switch>
                    <Route exact={true}
                           path='/main'
                    >
                        <News news={this.sliceNews()} title={'Всегда свежие новости'} isLink={true}/>
                    </Route>

                    <Route exact={true}
                           path='/news'
                    >
                        <News news={this.sliceNews( 18 )} title={'Быть в курсе событий'} isLink={false}/>
                    </Route>

                    <Route exact={true} path='/contact'>
                        <Contacts {...contacts}/>
                    </Route>

                    <Route exact path='/'>
                        <Redirect to='/main'/>
                    </Route>

                    {this.singleNews()}

                    <Route
                        path='*'
                        component={Error}
                    />

                </Switch>

                <Footer/>
            </Router>
        )
    }
}

export default App