import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import '../SCSS/style.scss'
import Header from '../Header'
import Footer from '../Footer'
import News from '../News'
import Error from '../Error'

import { getData } from '../Client/Client'
import Contacts from '../Contacts';
import SingleNews from '../SingleNews'

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
                    title={item.title}
                    content={item.description}
                    img={item.urlToImage}
                />
            </Route>
        ) )
    }

    sliceNews = (n) => {
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
                        <News news={this.sliceNews( 6 )}/>
                    </Route>

                    <Route exact={true}
                           path='/news'
                    >
                        <News news={this.sliceNews( 18 )}/>
                    </Route>

                    <Route exact={true} path='/contact' component={Contacts}/>

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

// const App = () => {
//     let fetched = false
//     const [news, setNews] = useState([])
//     useEffect(() => {
//         if (!fetched) {
//             getData().then(setNews)
//             fetched = true;
//         }
//     }, [fetched])
//
//     return (
//         <div>
//             <Header/>
//             {
//                 (news ? news.map((n, i) => (
//                     <div key={i}>
//                         <p>{n.title}</p>
//                         <hr/>
//                     </div>
//                 )) : 'No data' )
//             }
//         </div>
//     )
// }

export default App