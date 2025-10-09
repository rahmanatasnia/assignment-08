import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import error from '../../assets/App-Error.png'
import { ArrowDownToLine } from 'lucide-react';
import { Star } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';


const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();

  const currentApp = apps.find(app => app.id === parseInt(id));
  const { image, title, companyName, ratingAvg, reviews, downloads, size, } = currentApp;

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

                <Link to ='/installation'>
                <div className='lg:hidden bg-[#00D390] h-10 text-xl font-semibold text-white px-5 py-1 rounded-md mt-10 hover:scale-105'>
                <button>Install ({size}MB)</button>
              </div>
              </Link>

            <div className='hidden lg:flex lg:gap-14 mt-10 font-semibold text-2xl'>
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
             
             <Link to ='/installation'>
             <div className='hidden lg:block md:block bg-[#00D390] w-100 h-15 text-2xl font-semibold text-white px-22 py-3 rounded-xl mt-10 hover:scale-105'>
                <button>Install Now ({size}MB)</button>
              </div>
              </Link>

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
              <h1 className='font-bold text-3xl text-[#001931]'>{reviews}</h1></div>
            </div>
    </div>
  );
};

export default AppDetails;