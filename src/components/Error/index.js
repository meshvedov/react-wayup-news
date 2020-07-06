import React from 'react'
import {Link} from 'react-router-dom'

export default function (props) {
    return (
        <div className={'container'}>
            <div className={'col'}>
                <h2>Page not found</h2>
                <Link to={'/main'} className={'btn btn-success'} >Go to Main</Link>
            </div>
        </div>
    )
}