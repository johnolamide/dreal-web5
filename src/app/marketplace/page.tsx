import MarketSidebar from '@/components/MarketSidebar/page'
import React from 'react'

const Arrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5"
      viewBox="0 0 24 24"
      id="angle-right-b"
    >
      <path
        fill="#2B4788"
        d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
      ></path>
    </svg>
  );

const Marketplace = () => {
  return (
    <main className="flex flex-col max-w-[1300px] container mt-12 gap-3">
        <h1 className="text-4xl max-w-xl leading-[55px] font-bold text-white">
       Marketplace
      </h1>
      <p className="text-white max-w-[50rem] leading-8">
        Lorem ipsum dolor sit amet consectetur. Sit aliquet mauris risus
        vestibulum metus aenean. Ut ridiculus scelerisque tellus porta purus
        diam fringilla. Justo consectetur scelerisque ornare sit est in sapien.
      </p>
      <div className="flex mt-10 gap-4">
        <MarketSidebar />
        <div className="flex w-full flex-col">
        <div className="flex items-center justify-between">
            <div className="flex items-center text-sm gap-1">
            <span>Ekiti state</span>
            <span><Arrow /></span>
            <span>Oye</span>
            </div>
            <div className="flex items-center text-sm gap-3">
                <input type="text" placeholder='Enter property name, location' className='py-2 px-3 w-[250px] rounded-md text-black outline-none ' />
                <button className='py-2 px-3 rounded-md bg-slate-50'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} id="search"><path fill="#000000" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg></button>
            </div>
        </div>

        <div className="flex flex-col mt-6">
            
        </div>

        </div>
      </div>
    </main>
  )
}

export default Marketplace