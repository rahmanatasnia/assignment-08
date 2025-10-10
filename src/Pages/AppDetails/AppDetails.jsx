import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import error from '../../assets/App-Error.png'
import { ArrowDownToLine } from 'lucide-react';
import { Star } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)





const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  

  const currentApp = apps.find(app => app.id === parseInt(id));
  const { image, title, companyName, ratingAvg, reviews, downloads, size, description } = currentApp;

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    const exists = savedApps.some(app => app.id === currentApp.id);
    setIsInstalled(exists);
  }, [currentApp.id]);

  const handleInstall = () => {
    const savedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    if (!isInstalled) {
      savedApps.push(currentApp);
      localStorage.setItem('installedApps', JSON.stringify(savedApps));
      setIsInstalled(true);

   MySwal.fire({
  title: "App Installed!",
  icon: "success",
  draggable: true
});
     
    }
  };

  if (!currentApp) return <img src={error} alt="" />;

  return (
    <div className='max-w-[1280px] mx-auto p-6'>
      <div className='flex items-start gap-8 lg:gap-16 p-4'>
        <div className='bg-base-200 rounded-2xl p-4 shadow-sm'>
          <img src={image} alt="" className='w-40 h-40 lg:w-85 lg:h-85 rounded-2xl ' />
        </div>
        <div>
          <div className='pt-4'>
            <h1 className='font-bold text-2xl lg:text-4xl text-[#001931]'>{title}</h1>
            <p className='mt-2 lg:text-[18px]'>Developed By
              <br />
              <span className='text-purple-700 font-semibold'> {companyName}</span></p>

                
                <div className='block lg:hidden'>
                  {isInstalled ? (
                    <div className='bg-gray-400 h-10 text-xl font-semibold text-white px-14 py-1 rounded-md mt-10'>
                      Installed </div>
                  ) : (
                    
                      <button 
                onClick={handleInstall}
                disabled={isInstalled} 
                className='bg-[#00D390] h-10 text-xl font-semibold text-white px-8 py-1 rounded-md mt-10 hover:scale-105'>
                  Install ({size}MB)  </button> 
                  )}
               
                  
                
              </div>
              

            <div className='hidden md:hidden lg:flex lg:gap-14 mt-10 font-semibold text-2xl'>
              <div className='text-center'>
                <h1 className='flex justify-center mb-2'><ArrowDownToLine /></h1>
                <p className='mb-2 text-xl lg:text-2xl text-gray-500'>Downloads</p>
                <h1 className='font-bold text-3xl text-[#001931]'>{downloads}</h1>
              </div>
              <div className='text-center'>
                <h1 className='flex justify-center mb-2'><Star /></h1>
                <p className='mb-2 text-xl lg:text-2xl text-gray-500'>Average Ratings</p>
                <h1 className='font-bold text-3xl text-[#001931]'>{ratingAvg}</h1>
              </div>
              <div className='text-center'>
                <h1 className='flex justify-center mb-2'><ThumbsUp /></h1>
                <p className='mb-2 text-xl lg:text-2xl text-gray-500'>Total Reviews</p>
                <h1 className='font-bold text-3xl text-[#001931]'>{reviews}</h1></div>
            </div>
             
             
             <div className='hidden lg:block'>
              {isInstalled ? (
                <div className='bg-gray-400 w-100 h-15 text-2xl font-semibold text-white px-38 py-3 rounded-xl mt-10'> Installed </div>
              ) : (
                <button
                onClick={handleInstall}
                className='bg-[#00D390] w-100 h-15 text-2xl font-semibold text-white px-22 py-3 rounded-xl mt-10'>
                  Install Now ({size}MB)

                </button>
              )}
              </div>
             

          </div>
        </div>
      </div>
    
       <div className='flex gap-12 lg:hidden mt-4 font-semibold text-2xl p-4'>
              <div className='text-center'>
              <h1 className='flex justify-center mb-2'><ArrowDownToLine/></h1>
              <p className='mb-2 text-[18px] text-gray-500'>Downloads</p>
              <h1 className='font-bold text-3xl text-[#001931]'>{downloads}</h1>
              </div>
              <div className='text-center'>
                 <h1 className='flex justify-center mb-2'><Star/></h1>
              <p className='mb-2 text-[18px] text-gray-500'>Average Ratings</p>
              <h1 className='font-bold text-3xl text-[#001931]'>{ratingAvg}</h1>
              </div>
              <div className='text-center'>
                 <h1 className='flex justify-center mb-2'><ThumbsUp/></h1>
              <p className='mb-2 text-[18px] text-gray-500'>Total Reviews</p>
              <h1 className='font-bold text-3xl text-[#001931]'>{reviews}</h1>
              </div>
            </div>
            <div className='p-4'>
              <h1 className='font-bold text-4xl text-[#001931]'>Description</h1>
              <p className='text-[18px] font-semibold text-gray-400 pt-4'>{description}</p>
            </div>
            <div>
              <h1 className='font-bold text-4xl text-[#001931] pl-4'>Ratings</h1>
              {/* <RatingsChart></RatingsChart> */}

              <div className="w-full max-w-3xl mx-auto mt-4 p-4 bg-white rounded-lg shadow">
 
  </div>
            </div>
    </div>
  );
};

export default AppDetails;