import React from 'react';

import Image from 'next/image';
import playstre from '../../public/images/paystore.png'
import Link from 'next/link';
import VideoPlayback from './VideoPlayer';



const AppLaunch: React.FC = () => {


    return (
        <div className='grid items-center justify-items-center my-0  md:my-12 '>
            <div className="flex flex-col items-center justify-center my-6 md:my-20 mx-auto md:w-2/3 p-2 md:p-0">

                <h2 className='font-semibold text-2xl md:text-4xl mb-4 truncate'>Why Combine Reading with Music?</h2>
                <p className='font-light text-lg'>Welcome to GGroove – your one-stop destination for all the apps designed and developed by our team. This website serves as a showcase of our work, featuring innovative and user-friendly applications created to enhance productivity, creativity, and entertainment. We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.</p>

            </div>
            <div className='bg-gray-200 h-96 w-2/3 rounded'>
                <VideoPlayback />
                <Link href={"https://play.google.com/store/apps/dev?id=5352759552017891252"}> <Image className='md:m-6 w-28 hover:scale-110 translate-x-0 transition-all hover:shadow-lg' src={playstre} alt='playstore' /></Link>

            </div>



        </div>

    );
};

export default AppLaunch;