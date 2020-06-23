import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '../SCSS/style.scss'
import Header from '../Header'

import { getData } from '../Client/Client'

class App extends React.Component {

    state = {
        news: []
    }

    componentDidMount() {
        getData().then(
            data => this.setState( {
                news: data
            } )
        )
    }

    render() {
        return (
            <Router>
                <Header/>
                {
                    (this.state.news.map( (n, i) => (
                        <div key={i}>
                            <p>{n.title}</p>
                            <hr/>
                        </div>
                    ) ))
                }

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