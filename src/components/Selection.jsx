import React from 'react';
import Bali2 from '../assets/images/bali2.jpg'
import Bali3 from '../assets/images/bali3.jpg'
import Bali4 from '../assets/images/bali4.jpg'
import Bali6 from '../assets/images/bali6.jpg'
import Bali7 from '../assets/images/bali7.jpg'
import Bali9 from '../assets/images/bali9.jpg'
import SelectionCards from './SelectionCards';


const Selection = () => {
    return(
        <div className=' bg-gray-100 py-16'>
            <h1 className='text-center py-2'> Bali Destinations</h1>
            <div className='max-w-[1040px] mx-auto px-4 py-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <SelectionCards bg={Bali2} text='Tebing Bali' />
                <SelectionCards bg={Bali3} text='Laut Bali' />
                <SelectionCards bg={Bali4} text='Nusa Penida' />
                <SelectionCards bg={Bali6} text='Garuda Wisnu Kencana' />
                <SelectionCards bg={Bali7} text='Pura' />
                <SelectionCards bg={Bali9} text='Tradisi Bali' />
            </div>
        </div>
    )
}

export default Selection