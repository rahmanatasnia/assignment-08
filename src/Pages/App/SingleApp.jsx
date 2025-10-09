import React from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const SingleApp = ({ singleApp }) => {

    const { image, title, ratingAvg, downloads, id } = singleApp;
    return (
       <Link to ={`/appDetails/${id}`}>
        <div className='max-w-[1440px] mx-auto p-6 lg:p-0 md:p-0 mt-8'>
            
                <div className='bg-base-200 rounded-md p-8 shadow-md hover:bg-pink-100 hover:scale-95'>
                    <div>
                        <img src={image} alt="" className='w-90 h-90 md:w-80 md:h-80 lg:w-70 lg:h-70 rounded-md' />
                        <h1 className='pt-4 font-semibold text-[20px]'>{title}</h1>

                        <div className='flex justify-between pt-4 font-semibold'>

                            <p className='flex justify-between bg-red-100 w-[90px] h-[31px] py-1 px-5 rounded-[20px] text-[#FF8811]'><Star />{ratingAvg}</p>

                            <p className='flex justify-between bg-green-100 w-[130px] h-[31px] py-1 px-7 rounded-[20px] text-[#00D390]'><ArrowDownToLine />{downloads}</p>

                        </div>
                    </div>
                </div>

        </div>
        </Link>

    );
};

export default SingleApp;