import React from 'react';
import error from '../../assets/error-404.png'

const Error = () => {
    return (
        <div className='max-w-[1280px] mx-auto min-h-screen flex flex-col justify-center items-center'>
           
            <img src={error} alt="" className='w-60 h-60 mb-6'/>
            
            <h1 className='font-bold text-6xl text-center'>Page Not Found</h1>
        </div>
    );
};

export default Error;