import React from 'react'

export default function ({title, content, img}) {
    return (
        <div>
            <h2>{title}</h2>
            <hr/>
            <p>{content}</p>
        </div>
    )
}