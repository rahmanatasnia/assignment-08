import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../App/SingleApp';

const FullApps = () => {

    const allApps = useLoaderData();
   
     
    return (
       
        <div className='max-w-[1440px] mx-auto p-4 mb-8'>
       <h1 className='font-bold text-4xl lg:text-6xl mt-8 mb-4 text-center text-[#001931]'>Our All Application</h1>
       <p className='text-gray-400 text-center mb-8'>Explore All Apps on the Market developed by us. We code for Millions</p>
       <div>
        <h4 className='font-semibold text-2xl text-[#001931]'>({allApps.length}) Apps Found</h4>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            allApps.map(app => (
                <SingleApp key={app.id} singleApp={app}></SingleApp>
            ))
        }
       </div>
       </div>
       
       
    );
};

export default FullApps;