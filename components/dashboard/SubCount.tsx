import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const SubCount = () => {
   return (
      <div className='flex flex-col items-center gap-2 h-full'>
         <div className='flex items-center gap-2'>
            <div className='grid place-items-center text-3xl text-extra-light w-12 h-12 rounded-3xl border-2 border-extra-light'>
               <p className='text-3xl text-extra-light'>1</p>
            </div>
            <h3>Subscriptions</h3>
         </div>

         <ul className='flex flex-col gap-2 w-full'>
            <li className="flex items-center justify-between gap-10 p-2 rounded-md bg-primary-dark/[25%] hover:simple-hover">
               <div className="flex gap-2">
               <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-500">
                  <h1>n</h1>
               </div>
               <div className="flex flex-col">
                  <h2 className="font-bold">Netflix</h2>
                  <small>Since 11/12/23 4:44:23</small>
               </div>
               </div>

               <div className="flex gap-4 items-center">
                  <p className="font-medium">$15.99</p>
                  <button className='group btn'>
                     <RiArrowRightSLine className='icon text-xl group-hover:text-extra-light'/>
                  </button>
               </div>
            </li>
         </ul>
      </div>
   )
}

export default SubCount