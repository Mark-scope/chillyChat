import React from 'react';
import Button from "../Button"


const Idcard = () => {
  return (
    <div className='w-full flex bg-white shadow-lg mt-4 top-74 rounded-lg p-6'>
        <div className="w-full m-2 flex justify-between items-center">
        <p className="text-lg flex-50/50">Sender's ID</p>
        <Button className="flex-50/50" text="Create ID"></Button>
            
        </div>
    </div>
  )
}

export default Idcard
