import Image from 'next/image';
import React from 'react';
import mockup from '../../public/images/house.png';
import background from '../../public/images/bac.png';
import Link from 'next/link';



const Landing: React.FC = () => {
    return (

        <div className=" flex flex-col mt-10  md:flex-row md:mt-14 items-center justify-evenly  font-[family-name:var(--font-geist-sans)]">
            <div className=" text-start mb-8 max-w-lg p-4 md:p-0  ">
                <h1 className="title md:text-4xl text-2xl  font-bold text-gray-900 mb-4">The Art of Reading While Listening to Music</h1>
                <h2 className="subtitle md:text-2xl text-lg text-gray-700 mb-2">A Perfect Match?</h2>
                <p className=" md:text-lg text-gray-600">Reading has long been cherished as a solitary, immersive activity. Whether it’s diving into a gripping novel, studying for exams, or catching up on insightful articles, the act of reading often demands focus and concentration. But what if we add music into the mix? Can melodies complement the written word, or are they just a distraction? Let’s explore the fascinating intersection of reading and music.</p>
                <button  >  <Link className='p-2 flex justify-center  to-slate-900 from-blue-400 bg-gradient-to-bl drop-shadow-lg rounded text-white transition-all hover:scale-105' href="https://play.google.com/store/apps/dev?id=5352759552017891252">Download </Link></button>

            </div>
            <div className=" flex items-center   justify-center ">
                <div className="absolute h-96 md:h-screen  z-10">

                    <Image className='h-full' src={background} alt='<a href="https://lovepik.com/images/png-elemental-background.html">Elemental Background Png vectors by Lovepik.com</a>' />
                </div>
                <Image src={mockup} alt="App Marquette" className="app-image w-full md:w-[32rem] h-auto mb-4 z-10" />

            </div>
        </div>


    );
};

export default Landing;