import React from 'react'

const Table = () => {
  return (
    <div className='w-2/4 top-28 bg-white rounded-t-lg shadow-lg absolute left-42'>
        <table className='w-full h-auto rounded-t-lg'>
            <thead className='p-4 bg-theadcolor '>
                <tr className=' flex space-x-64 p-3 '>
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
