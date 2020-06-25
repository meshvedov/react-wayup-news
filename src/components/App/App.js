import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import '../SCSS/style.scss'
import Header from '../Header'
import Footer from '../Footer'
import News from '../News'

import { getData } from '../Client/Client'

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

    sliceNews = (n) => {
        return this.state.news.slice( 0, n )
    }

    render() {
        return (
            <Router>
                <Header/>


                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/main'/>
                    </Route>
                    <Route exact
                           path='/main'
                    >
                        <News news={this.state.news} />
                    </Route>


                    <Route exact
                           path='/news'
                    >
                        <News news={this.sliceNews( 18 )}/>
                    </Route>


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