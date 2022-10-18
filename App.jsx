import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from "./data"

export default function App() {
  // <Hero />
  const dataEl = Data.map(info => {
      return ( <Card 
        key={info.id}
        img={info.img} 
        rating={info.stats.rating} 
        reviewCount={info.stats.reviewCount} 
        location={info.location} 
        title={info.title} 
        price={info.price}
        openSpots={info.openSpots}/>
      )
  }) 
return (
<div>
  <Nav />
  <Hero />
  <section className='cardsList'>
    {dataEl}
  </section>
</div>
)
}