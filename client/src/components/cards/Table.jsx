import React from 'react'

const Table = () => {
  return (
    <div className='w-full  bg-white rounded-t-lg shadow-md '>
        <table className='w-full h-auto rounded-t-lg'>
            <thead className='p-4 bg-theadcolor rounded-t-lg'>
                <tr className=' flex space-x-64 p-3'>
                    <td>To</td>
                    <td>Status</td>
                    <td>Time</td>
                </tr>
            </thead>
            {/* <tbody>
                <tr className='flex space-x-64 p-3'>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody> */}
        </table>
    </div>
  )
}

export default Table
