import React, { useState } from 'react';
import Img from "../../assets/gear.png";
import SmallMenu from './smallMenu';

const UndeliveredHistory = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [rowChecked, setRowChecked] = useState({});

  const handleClick = () => {
    setShowMenu(!showMenu); // Toggle the showMenu state on click
  };

  const handleAllChecked = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);

    // Update the rowChecked state for all rows based on newCheckedState
    const updatedRowChecked = {};
    data.forEach((_, index) => {
      updatedRowChecked[index] = newCheckedState;
    });
    setRowChecked(updatedRowChecked);
  };

  const handleRowChecked = (index) => {
    setRowChecked({
      ...rowChecked,
      [index]: !rowChecked[index],
    });
  };

  const data = [
    
    // Add more rows as needed
    { id: 1, to: 'Abigail watts', subject: 'Please I am waiting for it', status: 'Undelivered', time: new Date().toLocaleString() }
  ];

  return (
    <>
      <table className='w-3/4 top-56 h-auto shadow-lg rounded-lg absolute left-42'>
        <thead id="thead" className='p-4 bg-theadcolor'>
          <tr className='p-3'>
            <td><input type='checkbox' checked={allChecked} onChange={handleAllChecked} /></td>
            <td>To</td>
            <td>Subject</td>
            <td>Status</td>
            <td>Time</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className='px-5 p-3'>
              <td><input type='checkbox' checked={!!rowChecked[index]} onChange={() => handleRowChecked(index)} /></td>
              <td>{row.to}</td>
              <td>{row.subject}</td>
              <td >
                <div style={{ backgroundColor: row.status === 'Delivered' ? '#38b000' : '#ef233c' }} className='w-28 text-white text-center rounded-md'>{row.status}</div>
              </td>
              <td>
                <div className='w-52 text-center text-white bg-timecolor rounded-md'>{row.time}</div>
              </td>
              <td>
                <div className='w-6'>
                  <img
                    src={Img}
                    alt="gear"
                    className='relative cursor-pointer' // Added cursor-pointer class for pointer cursor
                    onClick={handleClick}                     
                  />
                 
                </div>
                
              </td>
            </tr>
          ))}
          {showMenu && <SmallMenu />}
        </tbody>
      </table>
    </>
  );
};

export default UndeliveredHistory;
