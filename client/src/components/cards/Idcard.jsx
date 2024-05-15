import React from 'react'


const Idcard = () => {
  return (
    <div className='w-80 h-auto bg-white shadow-lg mt-4 absolute top-74 rounded-lg p-3'>
        <div className="ml-4 mt-2 flex space-x-10"><p className="text-lg pt-2">Sender's ID</p>
            <button className='w-32 mt-3 bg-navcolor p-2 rounded-lg text-white'>Create ID</button>
        </div>
    </div>
  )
}

export default Idcard
