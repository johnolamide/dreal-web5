import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='flex justify-between container py-10 max-w-[1300px] items-center'>
        <div className="flex items-center gap-4 ">
            {/* <Image src="/images/logo.svg" width={128} height={128} alt="logo" /> */}
            <h1 className="text-4xl font-bold">DEAL</h1>
        </div>
        <ul className="flex items-center p-3 gap-8 rounded-lg bg-white capitalize text-black">
            <li className=" cursor-pointer  text-white py-1 bg-black rounded-md px-3">Home</li>
            <li className=" cursor-pointer py-1 rounded-md hover:text-white hover:bg-black px-3">Marketplace</li>
            <li className=" cursor-pointer py-1 rounded-md hover:text-white hover:bg-black px-3">Bookmark</li>
            <li className=" cursor-pointer py-1 rounded-md hover:text-white hover:bg-black px-3">Team</li>
            <li className=" cursor-pointer py-1 rounded-md hover:text-white hover:bg-black px-3">Contact Us</li>
        </ul>
        <Link href="#" className='bg-white text-black rounded-lg px-4 py-3'>
            Connect Identity
        </Link>
    </nav>
  )
}

export default Navbar