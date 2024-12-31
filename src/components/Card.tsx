import Image from 'next/image'
import React from 'react'

import itemData from '@/data/data'
import Link from 'next/link'

const Card = () => {
    return (
        <div className=' mb-4 md:mt-44' id='#about'>
            <div className='my-20 px-4 w-full md:w-2/3'>
                <div className='flex my-2 '>
                    <h3 className='text-4xl'>Enhancing Your Experience with some apps</h3>
                    <hr className='bg-slate-500' />
                </div>
                <p className='text-gray-600'>Discover all the apps we’ve designed and developed, brought together in one convenient place. Each app is tailored to provide unique solutions, whether you need productivity tools, creative resources, or entertainment. Browse through the collection, learn about their features, and download the ones that fit your needs. Start exploring today!</p>
            </div>

            <div className='flex gap-12 flex-col md:flex-row overflow-x-scroll pb-6 px-2 box-content '>
                {itemData.map((item) => (<div key={item.id} className='rounded-md px-4 min-w-96 py-2  bg-slate-200  bg-opacity-55 flex flex-col drop-shadow-2xl'>
                    <div className='rounded-lg p-2 bg-opacity-30 bg-slate-100'>
                        <Image className='rounded-md max-h-[150px]' src={item.image} alt={item.title} />

                    </div>
                    <div className='flex flex-col gap-2 mt-4   '>
                        <h3 className='font-bold text-teal-900 uppercase text-lg'>{item.title}</h3>
                        <p className='text-sm h-24 overflow-x-hidden text-gray-600'>{item.description}</p>
                        <Link className='p-2 flex justify-center  to-slate-900 from-blue-400 bg-gradient-to-bl drop-shadow-lg rounded text-white transition-all hover:scale-105' href={item.link}>  <button  >Download</button></Link>
                    </div>
                </div>))}
            </div>

        </div>

    )
}

export default Card