import React from 'react'
import Img from "../../assets/trash_bin.png"
import Img2 from "../../assets/Search 2.png"
import Input from '../inputs/Input'

const Historytop = () => {
  return (
    
      <>
        <h2 className='fixed top-28 text-xl left-42'>Sms History</h2>  
        <div className='flex w-3/4 absolute top-40 border-b-2 border-timecolor' id="search">
        <div className='flex space-x-10 pb-3'>
                <a href='#'>All</a>
                <a href='#'>Delivered</a>
                <a href='#'>Undelivered</a>
            </div>
            <div className='flex space-x-10 pb-3 '>
                 <Input type="search" placeholder="Search" /><img src={Img2} alt="" className='absolute top-2 pl-40' />
                <div className='w-10 bg-timecolor py-1'><img src={Img} alt="" className='m-auto' /></div>
            </div>
             </div>
        </>
  )
}

export default Historytop;
