import React from 'react'

const Input = (props) => {
  
  const { type, placeholder } = props;

  return (
    <div className="w-full font-Poppins mt-[20px]">
      {type === 'textarea' ? (
        <textarea className='w-full h-44 border-2 p-4 rounded-lg border-bordercolor bg-inputcolor outline-none text-left' placeholder={placeholder} />
      ) : (
        <input type={type} className='w-full h-12 p-4 border-2 rounded-lg border-bordercolor bg-inputcolor outline-non text-left' placeholder={placeholder} />
      )}
    </div>
  );
}


export default Input