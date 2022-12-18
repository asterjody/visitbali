import React, {useState} from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        url:'https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
    },
    {
        url:'https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
    },
];

const Sliders = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    };

    return(
        <div className='max-w-[1040px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <BsArrowLeftSquareFill 
            onClick={prevSlide}  
            className='absolute top-[50%] text-3xl cursor-pointer left-8' 
            />
            <BsArrowRightSquareFill 
            onClick={nextSlide} 
            className='absolute top-[50%] text-3xl cursor-pointer right-8' 
            />
            {sliderData.map((item, index) => {
                <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                   {index === slide && ( 
                   <img className='w-full rounded-md' src={item.url} alt='/' />
                   )}
                </div>
            })}
        </div>
    );
};

export default Sliders;