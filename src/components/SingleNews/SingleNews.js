import React from 'react'

import Date from '../Date'

export default function (props) {
    const {
        title,
        description,
        urlToImage,
        source,
        url
    } = props

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col col-md-4'}>
                    <div className={'singleNews'}>
                        <h1 className={'singleNews__title'}>{title}</h1>
                        <a href={url} className={'singleNews__source'} target={'_blank'}>
                            {source.name}
                        </a>

                        <Date {...props}/>
                    </div>
                </div>
                <div className={'col col-md-8'}>
                    <div className={'image'}>
                        <img src={urlToImage}></img>
                    </div>
                    <p className={'singleNews__content'}>{description}</p>
                    <a href={url} className={'singleNews__link'} target={'_blank'}>
                        Продолжение ...
                    </a>
                </div>
            </div>
        </div>
    )
}