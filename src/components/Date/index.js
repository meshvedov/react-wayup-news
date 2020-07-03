import React from 'react'

import { publishedMonth, publishedDay } from '../Helper'

import './_Date.scss'

export default function (props) {
    const { publishedAt: time } = props

    return (
        <div className={'date-time'}>
            <span>{publishedDay( time )}</span>
            <span>/ {publishedMonth( time )}</span>
        </div>
    )
}