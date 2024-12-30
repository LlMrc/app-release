import Image from 'next/image'
import React from 'react'

const NavBar = () => {
    return (

        <nav className='absolute top-4 z-10  w-full '>
            <div className="row-start-3  flex gap-6 flex-wrap items-center justify-center ">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Home
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="mailto:llouismrc2@gmail.com"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Contact us
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://lml-creative.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image

                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Learn more →
                </a>

            </div></nav>
    )
}

export default NavBar