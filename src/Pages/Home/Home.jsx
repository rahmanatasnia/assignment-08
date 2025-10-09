import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AllApps from '../allApps/allApps';
import { useLoaderData } from 'react-router';



const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
           <Banner></Banner>
          <AllApps data={data}></AllApps>
        
        </div>
    );
};

export default Home;