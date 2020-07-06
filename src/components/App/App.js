import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import '../SCSS/style.scss'
import Header from '../Header'
import Footer from '../Footer'
import News from '../News'
import Error from '../Error'

import { getData } from '../Client/Client'
import Contacts from '../Contacts';
import SingleNews from '../SingleNews';
import routes from '../../config/routersConfig';

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

    renderPage = (routes) => {
        return Object.keys( routes ).map( (key) => {
            const route = routes[key];
            return (
                <Route exact={route.exact}
                       path={route.path}
                       key={key}
                >
                    {
                        {
                            main: <News news={this.sliceNews( route.countNews )} title={route.title}
                                       isLink={route.isLink}/>,
                            news: <News news={this.sliceNews( route.countNews )} title={route.title}
                                        isLink={route.isLink}/>,
                            contact: <Contacts {...route.data}/>,
                            redirect: <Redirect to={route.to} />

                        }[key]
                    }

                </Route>
            )
        } )
    }

    render() {
        return (
            <Router>
                <Header/>

                <Switch>
                    {this.renderPage( routes )}

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