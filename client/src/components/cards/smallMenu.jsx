import React from 'react'

const SmallMenu = () => {
  return (
    <div className='w-40 h-auto bg-white absolute top-64 shadow-md py-1 rounded-md  px-2 list-none' id='small' >
      <li className='border-b-2 py-3 border-timecolor' ><a href="#">View</a></li>
      <li className='border-b-2 py-3 border-timecolor'><a href="#">Delete</a></li>
    </div>
  )
}

export default SmallMenu