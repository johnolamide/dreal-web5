import React from 'react'

const ArrowDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 24 24" id="angle-down"><path fill="#ffffff" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg>
)
const MarketSidebar = () => {
  return (
    <div className='border-r border-gray-500 flex flex-col gap-5 text-[15px] pr-5 py-4'>
        <p className="text-gray-500">Filter</p>
        <p className="text-gray-500">Recommended</p>
        <ul className="flex-col flex gap-5 text-gray-500">
            <li className="flex justify-between cursor-pointer items-center gap-12">
                <p>Apartment</p>
                <ArrowDown />
            </li>
            <li className="flex justify-between cursor-pointer items-center gap-12">
                <p>House</p>
                <ArrowDown />
            </li>
            <li className="flex justify-between cursor-pointer items-center gap-12">
                <p>Office</p>
                <ArrowDown />
            </li>
            <li className="flex justify-between cursor-pointer items-center gap-12">
                <p>Hotel</p>
                <ArrowDown />
            </li>

        </ul>
    </div>
  )
}

export default MarketSidebar