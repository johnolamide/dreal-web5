"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export default function Home() {
  const [firstScreen, setFirstScreen] = React.useState(true);
  const [secondScreen, setSecondScreen] = React.useState(false);
  const [thirdScreen, setThirdScreen] = React.useState(false);

  return (
    <main className="container mt-2 max-w-6xl">
      <h1 className="text-4xl max-w-xl text-center leading-[55px] mx-auto font-semibold text-white">
        A full integrated system for what you call
        <span className="text-slate-500 ml-2 text-[40px] font-semibold font-['Poppins'] leading-[60px]">
          “home”
        </span>
      </h1>
      <p className="text-white max-w-[50rem] mx-auto text-center mt-4 leading-8">
        Lorem ipsum dolor sit amet consectetur. Sit aliquet mauris risus
        vestibulum metus aenean. Ut ridiculus scelerisque tellus porta purus
        diam fringilla. Justo consectetur scelerisque ornare sit est in sapien.
      </p>

      <div className="flex flex-col gap-5 bg-white rounded-lg px-8 py-8 text-black mt-10">
        <h2 className="text-lg font-semibold">{`Let's get started`}</h2>
        <div className="flex items-center gap-1">
          <span>Location</span>
          <span><Arrow /></span>
          <span>Apartment type</span>
          <span><Arrow /></span>
          <span>Availability</span>
        </div>

        {
          firstScreen && (
            <>
            <div className="flex w-full flex-between  items-center">
             <div className=" flex w-full gap-2 mr-10 flex-col">
             <label
                htmlFor="countries"
                className="block mt-3 text-sm font-medium text-gray-900"
              >
                State
              </label>
              <select
                id="countries"
                className="border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-slate-500 block w-full p-2.5 px-4 bg-slate-200"
              >
                <option selected>Choose a state</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
             </div>
             <div className=" flex w-full gap-2 flex-col">
             <label
                htmlFor="countries"
                className="block mt-3 text-sm font-medium text-gray-900"
              >
                Local Government
              </label>
              <select
                id="countries"
                className="border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-slate-500 block w-full p-2.5 px-4 bg-slate-200"
              >
                <option selected>Select local government</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
             </div>
            </div>
            <button className="py-3 hover:bg-slate-100 w-full border rounded-lg mt-4">Proceed to Apartment Type</button>
            <div className="flex items-center justify-between">
              <button onClick={() =>{
                setFirstScreen(false)
                setSecondScreen(true)
              }} className="hover:underline ">Next</button>
              <button className="hover:underline">Skip</button>
      
            </div>
            </>
          )
        }
        {
          secondScreen && (
            <>
            <div className="flex w-full flex-between  items-center">
             <div className=" flex w-full gap-2 mr-10 flex-col">
             <label
                htmlFor="countries"
                className="block mt-3 text-sm font-medium text-gray-900"
              >
                Apartment Type
              </label>
              <select
                id="countries"
                className="border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-slate-500 block w-full p-2.5 px-4 bg-slate-200"
              >
                <option selected>Choose a state</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
             </div>
             <div className=" flex w-full gap-2 flex-col">
             <label
                htmlFor="countries"
                className="block mt-3 text-sm font-medium text-gray-900"
              >
                Type of Furnishing
              </label>
              <select
                id="countries"
                className="border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-slate-500 block w-full p-2.5 px-4 bg-slate-200"
              >
                <option selected>Select local government</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
             </div>
            </div>
            <button className="py-3 hover:bg-slate-100 w-full border rounded-lg mt-4">Proceed to Apartment Type</button>
          <div className="flex items-center justify-between">
            <div className="flex">
            <button onClick={() =>{
              setSecondScreen(false)
              setThirdScreen(true)
            }} className="hover:underline mr-2 ">Next</button>
            |
            <button onClick={() =>{
              setSecondScreen(false)
              setFirstScreen(true)
            }} className="hover:underline text-gray-400 ml-2">Previous</button>
            </div>
            <button className="hover:underline">Skip</button>

          </div>
            </>
          )
        }
        {
          thirdScreen && (
            <>
            <div className="flex w-full flex-between  items-center">
             <div className=" flex w-full gap-2 mr-10 flex-col">
             <label
                htmlFor="countries"
                className="block mt-3 text-sm font-medium text-gray-900"
              >
                Occupancy
              </label>
              <select
                id="countries"
                className="border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-slate-500 block w-full p-2.5 px-4 bg-slate-200
                "
              >
                <option selected>Choose a state</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              </div>
              <div className=" flex w-full gap-2 flex-col">
              <label
                htmlFor="countries"
                className="block mt-3 text-sm font-medium text-gray-900"
              >
                Available Rooms
              </label>
              <select
                id="countries"
                className="border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-slate-500 block w-full p-2.5 px-4 bg-slate-200
                "
              >
                <option selected>Choose a state</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              </div>
            </div>
            <button className="py-3 hover:bg-slate-100 w-full border rounded-lg mt-4">Proceed to Apartment Type</button>
            <div className="flex items-center justify-between">
              <button onClick={() =>{
                setThirdScreen(false)
                setSecondScreen(true)
              }} className="hover:underline ">Previous</button>
              {/* <button className="hover:underline">Skip</button> */}
            </div>
            </>
          )
        }
      </div>

     
    </main>
  );
}
