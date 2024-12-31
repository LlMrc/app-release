import Image from 'next/image'
import React from 'react'

function ArrowBtn() {
    return (
        <div className=' '>
            <a href='#benefit'>
                <Image

                    className='w-10 -rotate-90 ml-[35rem] mt-12 transition-transform hover:translate-y-2'
                    aria-hidden
                    src="/arrow-left.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
            </a>

        </div>
    )
}

export default ArrowBtn