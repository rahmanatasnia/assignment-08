import React, { Suspense } from 'react';
import SingleApp from '../App/SingleApp';

const AllApps = ({ data }) => {

    return (
        <div>
            <h1 className='font-bold text-4xl lg:text-5xl text-[#001931] mt-15 text-center'>Trending Apps</h1>
            <p className='text-[#627382] text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-600">
                <div className="w-16 h-16 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-medium text-pink-600 animate-pulse">🌸 Loading something magical...</p>
            </div>}>

            <div className='max-w-[1440px] mx-auto'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        data.map((singleApp) => <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
                    }
                </div>

                
            <div className='text-center'>
                <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[250px] h-[50px] rounded-[8px] text-white font-semibold text-xl mt-10 mb-20 hover:bg-purple-300 hover:scale-95'>Show All</button>

            </div>

                </div>
            </Suspense>
        </div>
    );
};

export default AllApps;