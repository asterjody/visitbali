import React from 'react';

const SelectionCards = (props) => {
    return(
        <div className='relative'>
            <img src={props.bg} alt=''/>
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='text-white left-4 bottom-4 font-bold text-xl absolute'>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default SelectionCards