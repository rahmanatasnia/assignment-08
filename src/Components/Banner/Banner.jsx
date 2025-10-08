import React from 'react';
import heroImage from '../../assets/hero.png'
import appStore from '../../assets/app store.png'
import playStore from '../../assets/play store.png'
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'

const Banner = () => {
    return (
        <div>
            <div className='w-full max-w-[1440px] mx-auto px-6 lg:px-8 mt-15'>
            <h1 className='font-bold md:text-5xl lg:text-6xl text-3xl my-5 text-center text-[#001931]'>We Build <br />
                <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                <br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex justify-center items-center mt-6 gap-4'>
                <a href='https://www.apple.com/app-store/' target='_blank' rel='noopener noreferrer' className="btn rounded-md text-[#001931] bg-base-200 w-[150px] lg:w-[200px] h-[46px] shadow-sm hover:bg-purple-300 hover:scale-105">

                    <img src={appStore} alt="App Store" className='w-[20px] h-[20px]' />

                    <h1 className='lg:text-xl'>App Store</h1>

                </a>
                <a href='https://play.google.com/store/games?hl=en' target='_blank' rel='noopener noreferrer' className="btn rounded-md text-[#001931]  bg-base-200 w-[150px] lg:w-[200px] h-[46px] shadow-sm hover:bg-purple-300 hover:scale-105">

                    <img src={playStore} alt="Play Store" className='w-[20px] h-[20px]' />

                    <h1 className='lg:text-xl'>Play Store</h1>

                </a>

            </div>

            <img src={heroImage} alt="Hero Image" className='mx-auto px-6 lg:px-8 mt-10' />
            </div>

            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-14 text-white'>
                 <div className='w-full max-w-[1440px] mx-auto px-6 lg:px-8'>
                <h1 className='font-bold text-3xl lg:text-5xl text-center pb-12'>Trusted by Millions, Built for You</h1>
               
                <div className='flex flex-wrap justify-around items-center text-center'>
                    <div className='hover:scale-105'>
                        <p className='pb-4'>Total Downloads</p>
                        <h1 className='flex justify-between lg:font-bold font-semibold text-5xl pb-4'>29.6M <img src={download} alt="Downloaded" className='invert brightness-0'/></h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='hover:scale-105'>
                        <p className='pb-4'>Total Reviews</p>
                        <h1 className='flex justify-between lg:font-bold font-semibold text-5xl pb-4'>906K <img src={rating} alt="Rating" className='invert brightness-0' /></h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='hover:scale-105'>
                        <p className='pb-4 pt-8 md:pt-0 lg:pt-0'>Active Apps</p>
                        <h1 className='flex justify-between lg:font-bold font-semibold text-5xl pb-4'>132+ <img src={review} alt="Review" className='invert brightness-0' /></h1>
                        <p>31 more will Launch</p>
                    </div>

                </div>
            </div>

            </div>

        </div>
    );
};

export default Banner;