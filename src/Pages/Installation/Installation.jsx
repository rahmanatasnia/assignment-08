import React, { useEffect, useState } from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { Star } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Installation = () => {

    const [installedApps, setInstalledApps] = useState([]);
    const[sortBy, setSortBy] = useState();

    useEffect(() => {
        const savedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(savedApps);
    }, [])

    const handleUninstall = (appId) => {
        const updatedApps = installedApps.filter(app => app.id !== appId);
        setInstalledApps(updatedApps);

        localStorage.setItem('installedApps', JSON.stringify(updatedApps));

          MySwal.fire({
  title: "App Uninstalled!",
  icon: "success",
  draggable: true
});
    }

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortBy === 'downloads') return b.downloads - a.downloads;
        if (sortBy === 'size') return b.size - a.size;
        return 0;
       
    })


    return (
        <div className='max-w-[1440px] mx-auto p-8'>

            <h1 className='font-bold text-4xl lg:text-6xl text-center mt-10 mb-4'>Your Installed Apps</h1>
            <p className='text-[18px] text-gray-500 text-center mb-14'>Explore All Trending Apps on the Market developed by us</p>

            <div className='block lg:flex justify-between items-center mb-10'>
                <p className='font-semibold text-xl'>
                    You've <span>({installedApps.length})</span> installed apps
                </p>
                {installedApps.length > 0 && (
                    <div className='font-semibold border border-gray-300 p-2 mt-6 lg:mt-0'>
                        <label className='text-xl'> Sort by:</label>
                        <select value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)} className='border-gray-300 rounded-md p-2'>
                            <option value=''>Default</option>
                            <option value='size-asc'>Small-&gt;Large</option>
                            <option value='size-desc'>Large-&gt;Small</option>
                          
                        </select>
                    </div>
                )}
            </div>

            {installedApps.length === 0 ? (
                <p className='font-semibold text-xl text-gray-400 text-center'>No Apps Installed Yet!</p>
            ) : (
                <div>
                    {installedApps.map((app) => (
                        <div key={app.id} className='bg-base-200 rounded-2xl shadow-sm p-4 mb-10'>
                            <div className='block lg:flex justify-between items-center'>
                            <div className='flex gap-6'>
                                <img src={app.image} alt="App Icon" className='lg:w-25 lg:h-25 w-18 h-18 rounded-2xl' />
                                <div>
                                    <h3 className='font-semibold text-[18px] lg:text-xl'>{app.title}</h3>
                                    <p className='text-gray-500 text-[14px] lg:text-[16px]'>Developed by <span className='text-purple-500 font-semibold'>{app.companyName}</span></p>


                                    <div className='flex gap-4 mt-6'>
                                        <div className='text-center'>
                                            <h1 className='flex justify-center mb-1'><ArrowDownToLine size={18} /></h1>
                                            <p className='mb-1 text-[12px] text-gray-500'>Downloads</p>
                                            <h1 className='font-bold text-[16px] text-[#001931]'>{app.downloads}</h1>
                                        </div>
                                        <div className='text-center'>
                                            <h1 className='flex justify-center mb-1'><Star size={18} /></h1>
                                            <p className='mb-1 text-[12px] text-gray-500'>Average Ratings</p>
                                            <h1 className='font-bold text-[16px] text-[#001931]'>{app.ratingAvg}</h1>
                                        </div>
                                        <div className='text-center'>
                                            <h1 className='flex justify-center mb-1'><ThumbsUp size={18} /></h1>
                                            <p className='mb-1 text-[12px] text-gray-500'>Total Reviews</p>
                                            <h1 className='font-bold text-[16px] text-[#001931]'>{app.reviews}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button 
                                onClick={() => handleUninstall(app.id)}
                                className='bg-red-300 w-full lg:w-30 h-10 mt-8 lg:mt-0 rounded-xl font-semibold text-red-700 hover:bg-red-500 hover:text-red-200 hover:scale-105 duration-200'>Uninstall</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            )

            }
        </div>
    );
};

export default Installation;