import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import '../SCSS/style.scss'
import Header from '../Header'
import Footer from '../Footer'
import News from '../News'
import Error from '../Error'

import { getData } from '../Client/Client'
import Contacts from '../Contacts';
import SingleNews from '../SingleNews';
import routes from '../../config/routersConfig';
import {newsGet} from '../../store/actions'

class App extends React.Component {

    // state = {
    //     news: []
    // }
    //
    componentDidMount() {
        getData().then(
            data => {
                this.props.getNews(data);
            }
        )
    }

    singleNews = () => {
        return this.props.news.map( (item, i) => (
            <Route exact={true} path={`/news/${i}`} key={i}>
                <SingleNews
                    {...item}
                />
            </Route>
        ) )
    }

    sliceNews = (n = 6) => {
        return this.props.news.slice( 0, n )
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
                            redirect: <Redirect to={'/main'} />

                        }[key]
                    }

                </Route>
            )
        } )
    }

    render() {
        console.log('props', this.props)
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

let mapStateToProps = (state) => {
    console.log('state ', state.news)
    return {
        news: state.news.art
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getNews: (data) => dispatch(newsGet(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);