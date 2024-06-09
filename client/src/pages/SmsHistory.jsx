import React from 'react'
import Navbar from "../components/nav/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import HistoryTable from '../components/cards/historyTable'
import Img from "../assets/trash_bin.png"
import Img2 from "../assets/Search 2.png"



const SmsHistory = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
          <div className="basis-1/6 h-screen">
          <Sidebar></Sidebar>
          </div>
          <div className="basis-5/6 h-screen ml-16 overflow-y-hidden">
              <h2 className='fixed top-28 text-xl left-42'>Sms History</h2>  
                <div className='flex w-3/4 absolute top-40 border-b-2 border-timecolor' id="search">
                    <div className='flex space-x-10 pb-3'>
                        <a href='#'>All</a>
                        <a href='#'>Delivered</a>
                        <a href='#'>Undelivered</a>
                    </div>
                    <div className='flex space-x-10 pb-3 '>
                        <input type="text" name="" id="" placeholder='Search' className='px-4 rounded-md border-2 outline-none border-timecolor relative'/><img src={Img2} alt="" className='absolute top-2 pl-40' />
                        <div className='w-10 bg-timecolor py-1'><img src={Img} alt="" className='m-auto' /></div>
                    </div>
                </div>
                <HistoryTable></HistoryTable>
          </div>
        </div>
    </div>
  )
}

export default SmsHistory
