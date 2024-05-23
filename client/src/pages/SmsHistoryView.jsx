import React from 'react'
import Smshistorynav from '../components/nav/smshistorynav'
import Img from '../assets/back-arrow.png'

const SmsHistoryView = () => {
  return (

    <div>
      <Smshistorynav></Smshistorynav>

      
      <div className='mt-10'>< p className='text-xl pl-20 text-viewtext'>Sms History</p></div>
      <div className='flex'>
        <div className='ml-20 mt-5 w-2/4 h-auto'>
          <table className='w-4/5 py-5 bg-transparent'>
            <thead className='w-full py-4 bg-white rounded shadow-md'>
              <tr>
                <td>
                  #
                </td>
                <td>Recipient</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody className='border-b border-smsborder'>
              <tr className=''>
                <td>1</td>
                <td>John</td>
                <td ><div className='w-28 text-white bg-green rounded-md text-center '>Delivered</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex-col w-2/4 m-auto text-divtext'>
          <div className='w-521 p-4  bg-white m-auto shadow-md rounded-lg mb-5'>
            <h1 className='border-b border-smsborder text-viewtext font-bold py-3'>Subject</h1>
            <p className='py-5'>Come for momo</p>
          </div>
          <div className='w-521 p-4 bg-white m-auto shadow-md rounded-lg'>
          <h1 className='border-b border-smsborder text-viewtext font-bold py-3'>Message</h1>
          <p className='py-5'>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat 
          </p>
          </div>
          <div className='mt-2 ml-24 '>
            <h1>Time:</h1>
            <div className='bg-timecolor w-52 text-center text-white rounded p-1'>{new Date().toLocaleString()}</div>
          </div>
        </div>
      </div>
      <div className='w-28 flex p-3  border-y-2 border-idcolor  ml-20'>
        <a className='flex' href='#'><img src={Img} alt="" />Back</a>

      </div>
    
    </div>

  )
}

export default SmsHistoryView
