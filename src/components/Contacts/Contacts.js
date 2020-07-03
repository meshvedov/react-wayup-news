import React from 'react'

export default function (props) {
    const {
        tel,
        telShow,
        firstName,
        lastName,
        mail,
        special,
        skills,
        photo
    } = props

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-md-6'}>
                    <div className={'contacts-phone'}>
                        <a className={''} href={`tel:${tel}`}>{telShow}</a>
                    </div>
                    <div className={'contacts'}>
                        <div className={'contacts__name'}>
                            <div>{firstName}</div>
                            {lastName}
                        </div>
                        <div className={'contacts__mail'}>
                            <a href={'mailto:mail@domain.com'}>{mail}</a>
                        </div>
                        <div className={'contacts__special'}>
                            {special}
                        </div>
                        <div className={'contacts__skills'}>
                            {skills}
                        </div>
                    </div>
                </div>
                <div className={'col-md-6'}>
                    <div className={'contacts-img'}>
                        <img src={`img/${photo}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}