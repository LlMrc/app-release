import Image from 'next/image';
import React from 'react';
import mockup from '../../public/images/prev.png';
import background from '../../public/images/bac.png';



const Landing: React.FC = () => {
    return (

        <div className=" flex flex-col md:flex-row md:mt-14 items-center justify-evenly  font-[family-name:var(--font-geist-sans)]">
            <div className=" text-start mb-8 max-w-lg p-4 md:p-0  ">
                <h1 className="title md:text-4xl text-2xl  font-bold text-gray-900 mb-4">Welcome to Code Groove</h1>
                <h2 className="subtitle md:text-2xl text-lg text-gray-700 mb-2">Experience the future of technology</h2>
                <p className=" md:text-lg text-gray-600">Our apps provides the best solutions for your needs. Join us and explore the endless possibilities.</p>
                <button className='bg-gradient-to-tr text-slate-50 to-slate-900 from-blue-400 rounded p-2 mt-4 shadow-purple-700 drop-shadow-md hover:drop-shadow'>
                    <a href="https://play.google.com/store/apps/dev?id=5352759552017891252">
                        Free Download
                    </a>
                </button>
            </div>
            <div className=" flex items-center justify-center ">
                <div className="absolute   w-2/4 z-10">

                    <Image src={background} alt='<a href="https://lovepik.com/images/png-elemental-background.html">Elemental Background Png vectors by Lovepik.com</a>' />
                </div>
                <Image src={mockup} alt="App Marquette" className="app-image w-52 md:w-[28rem] h-auto mb-4 z-10" />

            </div>
        </div>


    );
};

export default Landing;