import React from 'react'
import Loginicon from '../assets/login.svg'

const Signup = () => {
  return (
    <div className='flex'>
        <div className='w-1/2 text-white flex flex-col justify-center items-center bg-custom-gradient h-screen'>
            <img className='pb-12 pr-16' src={Loginicon} alt="" />
            <p className='font-semibold text-[20px]' >Connect  With Every User With a Click</p>
            <span className=' pt-4'>Everything you need is an easy and simple to use dashboard</span>
        </div>

        <div>

        </div>

    </div>
  )
}

export default Signup