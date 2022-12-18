import React from 'react';


import Bali4 from '../assets/images/bali4.jpg'
import Bali5 from '../assets/images/bali5.jpg'
import Bali6 from '../assets/images/bali6.jpg'
import Bali7 from '../assets/images/bali7.jpg'
import Bali9 from '../assets/images/bali9.jpg'

const Why = () => {
    return(
        <div className='max-w-[1040px] mx-auto py-16 px-4 text-center'>
            <h2>Why You Should</h2>
            <h1>VISIT BALI?</h1>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2'  src={Bali4} alt='Bali Sea' />
                <img className='w-full h-full object-cover' src={Bali5} alt='Bali Traditional Dancer' />
                <img className='w-full h-full object-cover' src={Bali6} alt='GWK' />
                <img className='w-full h-full object-cover' src={Bali7} alt='Temple' />
                <img className='w-full h-full object-cover' src={Bali9} alt='Bali Tradition' />
            </div>
            <p>Among the more than 17,000 islands in Indonesia, Bali still shines the brightest in terms of tourism. There are countless other tropical destinations, but for millions of tourists each year, this fascinating island is the favourite.
            The unending list of stunning beaches is probably the most obvious reason to visit this tropical paradise in the Indonesian archipelago. Each beach has its own charm, from soft white sand and limestone cliffs to extreme water sports and diving. From the mainstream Kuta and luxurious Nusa Dua neighbourhoods to hidden, remote beaches away from the crowds, there’s a beach for everyone.
            </p>
        </div>
    )
}

export default Why