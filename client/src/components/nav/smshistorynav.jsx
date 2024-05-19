import React from 'react'
import Balance from "./Balance"
import Profile from "./Profile"

const Smshistorynav = () => {
  return (
    
      <nav className="w-full h-20 bg-white z-10 shadow-md flex">
            <h1 className='pl-10 pt-5 text-xl text-violet'><span className='font-bold'>Chilly</span>chat</h1>
            <Balance></Balance>
            <Profile name="John"></Profile>

        </nav>
   
  )
}

export default Smshistorynav ;

