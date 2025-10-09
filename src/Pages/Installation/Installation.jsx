import React from 'react';
import { useLoaderData } from 'react-router';


const Installation = () => {
    
    const installs = useLoaderData();


    return (
        <div>
           <h1>Here is installation</h1>
        </div>
    );
};

export default Installation;