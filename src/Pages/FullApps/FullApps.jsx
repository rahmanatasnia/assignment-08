import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import SingleApp from '../App/SingleApp';
import Spinner from '../../Components/Spinner';

const FullApps = () => {

    const allApps = useLoaderData();
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');

    if (navigation.state === 'loading') {
        return <Spinner></Spinner>
    }
      const filteredApps = allApps.filter(app =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
   
     
    return (
       
        <div className='max-w-[1440px] mx-auto p-4 mb-8'>
       <h1 className='font-bold text-4xl lg:text-6xl mt-8 mb-4 text-center text-[#001931]'>Our All Application</h1>
       <p className='text-gray-400 text-center mb-8'>Explore All Apps on the Market developed by us. We code for Millions</p>
       <div className='block lg:flex justify-between mb-10 p-8 lg:p-4'>
        <h4 className='font-semibold text-2xl text-[#001931] pl-4'>({filteredApps.length}) Apps Found</h4>
        <input
                    type="text"
                    placeholder="Search apps..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='mt-8 lg:mt-0 border border-gray-300 rounded-md p-2 w-full md:w-1/3'
                />
       </div>
       

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            filteredApps.map(app => (
                <SingleApp key={app.id} singleApp={app}></SingleApp>
            ))
        }
       </div>
       </div>
       
       
    );
};

export default FullApps;