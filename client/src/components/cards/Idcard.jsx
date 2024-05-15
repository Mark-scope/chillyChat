import React from 'react';
import Button from "../Button"


const Idcard = () => {
  return (
    <div className='w-full flex bg-white shadow-md mt-4 rounded-lg px-6 py-4'>
        <div className="w-full m-2 flex justify-between items-center">
        <p className="text-lg flex-50/50">Sender's ID</p>
        <Button className="flex-50/50" text="Create ID"></Button>
            
        </div>
    </div>
  )
}

export default Idcard
