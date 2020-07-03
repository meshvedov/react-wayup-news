import React from 'react'

import Date from '../Date'

export default function (props) {
    const {
        title,
        description,
        urlToImage,
        source,
    } = props

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col col-md-4'}>
                    <h1 className={'singleNews__title'}>{title}</h1>
                    <div className={'singleNews__source'}>
                        {source.name}
                    </div>

                    <Date {...props}/>

                </div>
                <div className={'col col-md-8'}>
                    <div className={'image'}>
                        <img src={urlToImage}></img>
                    </div>
                    <p className={'singleNews__content'}>{description}</p>
                </div>
            </div>
        </div>
    )
}