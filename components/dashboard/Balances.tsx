import React from 'react'

const Balances = () => {
  return (
   <>
      <li className="flex p-2 rounded-md items-center justify-between gap-4">
         <div className="flex gap-2 items-center">
            <div className="overflow-hidden relative w-10 h-10 rounded-lg bg-primary-dark shadow-label">
               <div className='absolute bottom-0 right-0 w-full h-[50%] bg-green-500 '></div>
            </div>
            <p>Card Balance</p>
         </div>

         <div className='flex items-center gap-2'>
            <p>$4465.55</p>
         </div>
      </li>
      <li className="flex p-2 rounded-md items-center justify-between gap-4">
         <div className="flex gap-2 items-center">
            <div className="overflow-hidden relative w-10 h-10 rounded-lg bg-primary-dark shadow-label ">
               <div className='absolute bottom-0 right-0 w-full h-[25%] bg-green-500 '></div>
            </div>
            <p>Card Balance</p>
         </div>

         <div className='flex items-center gap-2'>
            <p>$4465.55</p>
         </div>
      </li>
   </>
  )
}

export default Balances