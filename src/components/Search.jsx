import React from 'react';
import{RiCustomerService2Fill} from 'react-icons/ri'
import{MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
    return(
        <div className='max-w-[1040px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2>VISITBALI. Services</h2>
                    <p className='py-4'>
                    VISITBALI is a service that makes it easy for you to travel in Bali. 
                    We provides transportation services as well as hotel or resort booking services located in bali.
                    please contact us if you encounter difficulties while using VISITBALI.</p>
                </div>
                    <div className='grid sm:grid-cols-2 gap-8 py-4'>
                        <div className='flex flex-col lg:flex-row items-center text-center'>
                            <button>
                                <RiCustomerService2Fill size={50}/>
                            </button>
                            <div>
                                <h3 className='py-2'>Leading Service</h3>
                                <p className='py-1'>24 Hours Customer Service that will help you through your problems.</p>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center text-center'>
                            <button>
                                <MdOutlineTravelExplore size={50}/>
                            </button>
                            <div>
                                <h3 className='py-2'>Explore</h3>
                                <p className='py-1'>24 Hours Customer Service that will help you through your problems.</p>
                            </div>
                        </div>

                    </div>
                </div>

            <div>
                <div className='border text-center'>
                    <p className='pt-2'>GET AN ADDITIONAL 20% OFF</p>
                    <p className='py-4'>24 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200'>BOOK YOUR TICKETS NOW!</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destination</label>
                        <select className='border rounded-md p-2'>
                            <option>Villa Seminyak Baru</option>
                            <option>The Bali Hotel</option>
                            <option>Kayu Cottage</option>
                            <option>Semesta Resort</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label>Check-in</label>
                        <input className='border rounded-md p-2' type='date'/>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label>Check-out</label>
                        <input className='border rounded-md p-2' type='date'/>
                    </div>
                    <button className='w-full my-4'>Rates & Availabilities</button>
                </form>
            </div>
        </div>
    )
}

export default Search