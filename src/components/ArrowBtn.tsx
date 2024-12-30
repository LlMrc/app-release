import Image from 'next/image'
import React from 'react'

function ArrowBtn() {
    return (
        <div className='w-full mt-16 flex justify-center -rotate-90 transition-transform hover:scale-110'>
            <Image
                className='w-10'
                aria-hidden
                src="/arrow-left.svg"
                alt="File icon"
                width={16}
                height={16}
            />
        </div>
    )
}

export default ArrowBtn