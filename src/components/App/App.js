import React, {useState, useEffect} from 'react'

import Header from '../Header'

import { getData } from '../Client/Client'

const App = () => {
    let fetched = false
    const [news, setNews] = useState([])
    useEffect(() => {
        if (!fetched) {
            getData().then(setNews)
            fetched = true;
        }
    }, [fetched])

    return (
        <div>
            <Header/>
            {
                (news ? news.map((n, i) => (
                    <div key={i}>
                        <p>{n.title}</p>
                        <hr/>
                    </div>
                )) : 'No data' )
            }
        </div>
    )
}

export default App