import React from 'react';
import { Link } from 'react-router-dom'

export default function (props) {
    return (
        <div>
            <h2>News {props.news.length}</h2>
            {
                props.news.map( (n, i) => (
                    <div key={i}>
                        <Link to={`/news/${i}`}>{n.title}</Link>
                        <hr/>
                    </div>
                ) )
            }
        </div>
    )
}