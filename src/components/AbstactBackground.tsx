import React from 'react';

import Image from 'next/image';
import playstre from '../../public/images/paystore.png'
import Link from 'next/link';
import VideoPlayback from './VideoPlayer';



const AbstractBackground: React.FC = () => {


    return (
        <div className='grid items-center justify-items-center  md:my-12 '>
            <div className="flex flex-col items-center justify-center my-6 md:my-20 mx-auto md:w-2/3 p-2 md:p-0">

                <h2 className='font-semibold text-2xl md:text-4xl mb-4 truncate'>Why Combine Reading with Music?</h2>
                <p className='font-light text-lg text-gray-600'>The idea of combining reading and music might seem counterintuitive at first, especially since both activities engage different parts of the brain. However, when done thoughtfully, music can enhance the reading experience in several ways:</p>

            </div>
            <div className='bg-gray-200 h-56 my-2  md:h-96 w-full md:w-2/3 rounded'>
                <VideoPlayback />
                <Link href={"https://play.google.com/store/apps/dev?id=5352759552017891252"}> <Image className='md:m-6 w-14 md:w-28 hover:scale-110 translate-x-0 transition-all hover:shadow-lg' src={playstre} alt='playstore' /></Link>

            </div>



        </div>

    );
};

export default AbstractBackground;