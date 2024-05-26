import React from 'react'
import Loginicon from '../assets/login.svg'
import google from '../assets/google.png'
import Button from '../components/Button'

const Signup = () => {
  return (
    <div className='flex'>

        <div className='w-1/2 text-white flex flex-col justify-center items-center bg-custom-gradient h-screen'>
            <img className='pb-12 pr-16' src={Loginicon} alt="" />
            <p className='font-semibold text-[20px]' >Connect  With Your Target With a Click</p>
            <span className=' pt-4'>Everything you need is easy and simple to use in dashboard</span>
        </div>

        <div className='w-1/2 flex flex-col justify-center items-center space-y-10 '>
            <div className='flex flex-col justify-center items-center '>
                <h1 className=' text-xl text-violet '>
                <span className='font-bold'>Chilly</span>Chat
                </h1>

                <p>Create an account with us</p>
            </div>

            <img src={google} alt="" />

            <div className="flex flex-row items-center">
                <div className="flex-1 h-1 bg-black"></div>
                <div className="w-70 text-center">
                    <p>Example</p>
                </div>
                <div className="flex-1 h-1 bg-black"></div>
            </div>

            <div >
                
                <form action="" className=' flex flex-col'>
                    <div className='flex space-x-4 w-full '>
                        <input type="text" placeholder='First Name' className='mb-6 w-70% border-b border-gray-300 p-2 outline-none bg-[#F9FAFB]' />
                        <input type="text" placeholder='Last Name' className=' w-70% mb-6 border-b border-gray-300 p-2 outline-none bg-[#F9FAFB]' />

                    </div>
                    <input type="text" placeholder='Email' className='w-70% mb-6 border-b border-navcolor-300 p-2 outline-none bg-[#F9FAFB]' />
                    <input type="text" placeholder='Password' className='w-70% mb-6 border-b border-navcolor-300 p-2 outline-none bg-[#F9FAFB]' />
                    <input type="text" placeholder='Confirm Password' className='w-70% mb-6 border-b border-navcolor-300 p-2 bg-[#F9FAFB] outline-none' />
                    <button className="px-[16px] mt-8 h-12 bg-navcolor text-white font-sans  rounded-lg">Sign</button>

                </form>

                <p className='text-center mt-4'>Already have an account? <a className='text-violet'>Login now</a></p>
            </div>

            


        </div>

    </div>
  )
}

export default Signup