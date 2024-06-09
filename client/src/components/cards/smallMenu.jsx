import React from 'react'

const SmallMenu = () => {
  return (
    <div className='w-48 h-auto bg-white absolute top-6 left-1 shadow-md py-4 rounded-md text-center px-4 list-none' id='small' >
      <li className='border-b-2 py-3 border-timecolor' ><a href="#">View</a></li>
      <li className=' py-3 '><a href="#">Delete</a></li>
    </div>
  )
}

export default SmallMenu