import React from 'react';
import { Link } from 'react-router-dom'

import Date from '../Date'

export default function (props) {
    const titles = props.title.split( ' ' )
    const [titleHead, ...other] = titles
    const titleTail = other.join( ' ' )

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col'}>
                    <h1 className={'news-title'}>
                        <div>{titleHead}</div>
                        {titleTail}
                    </h1>
                </div>
            </div>

            <div className={'row'}>
                {
                    props.news.map( (n, i) => (
                        <div className={'col-md-4'} key={i}>
                            <div className={'news-body'}>
                                <div className={'news-body__head'}>
                                    <Link to={`/news/${i}`}>{n.title}</Link>
                                </div>
                                <div className={'news-body-footer'}>
                                    <div className={'news-body-footer__source'}>
                                        {n.source.name}
                                    </div>

                                    <Date {...n}/>
                                </div>
                            </div>
                        </div>
                    ) )
                }
            </div>

            {
                (props.isLink ?
                    <div className={'row'}>
                        <div className={'col'}>
                            <div className={'linkToNews'}>
                                <Link to={'/news'}>Быть в курсе событий</Link>
                            </div>
                        </div>
                    </div>
                    : '')
            }
        </div>
    )
}
