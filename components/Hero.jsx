import React from 'react'

export default function Hero() {
    return (
        <header className='hero'>
            <img className='heroimg' src="/images/hero_imgs.png" alt="" />
            <h1 className='herotext'>Online Experiences</h1>
            <p className='herop'>Join unique interactive activities
               led by one-of-a-kind hosts—all without leaving home.
            </p>
            {/* <img className='heroimg' src="afroheroimg.png" alt="" /> */}
            {/* <h1 className='herotext'>We Are Nature</h1>
            <p className='herop'>It's the air we breathe.
                The soil that grounds us.
                The rhythms that move us.
                We're not just one with nature.
                We Are Nature.
            </p> */}
        </header>
    )
}