import React, { useState } from 'react';
import Img from "../../assets/gear.png";
import SmallMenu from './smallMenu';

const HistoryTable = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu); // Toggle the showMenu state on click
  };

  return (
    <>
      <table className='w-3/4 top-56 h-auto shadow-lg rounded-lg absolute left-42'>
        <thead id="thead" className='p-4 bg-theadcolor'>
          <tr className='p-3'>
            <td><input type='checkbox' /></td>
            <td>To</td>
            <td>Subject</td>
            <td>Status</td>
            <td>Time</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className='px-5 p-3'>
            <td><input type='checkbox' /></td>
            <td>Messi Johns</td>
            <td>Come for free momo</td>
            <td><div className='w-28 text-white bg-green rounded-md text-center'>Delivered</div></td>
            <td>
              <div className='w-52 text-center text-white bg-timecolor rounded-md '>{new Date().toLocaleString()}</div>
            </td>
            <td>
              <div>
                <img
                  src={Img}
                  alt="gear"
                  className='relative cursor-pointer' // Added cursor-pointer class for pointer cursor
                  onClick={handleClick} // Changed to onClick event
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {showMenu && <SmallMenu />}
    </>
  );
};

export default HistoryTable;
