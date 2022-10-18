import React from 'react'

export default function Card(props) {
    // console.log(props.openSpots)
    // console.log(props.title)

    let badgeText
        //sold out will render over online because it's first.. and prefered
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className='card'>
            {badgeText && <div className='cardBadge'>{badgeText}</div>}
            <img className='cardimg' src={`/images/${props.img}`}/>
            <div className="cardStats">
            <img className='starimg' src="/images/star1.png" alt="star rating"/>
            <span>{props.rating}</span>
            <span className='spancolor'>({props.reviewCount}) • </span>
            <span className='spancolor'>{props.location}</span>
            </div>
            <p className='cardTitle'>{props.title}</p>
            <p className='cardPrice'> <span className='bold'>From ${props.price} </span>/ person</p>
        </section>
    )
}
