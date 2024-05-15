import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="px-[16px] my-[10px] h-12 bg-navcolor text-white font-sans  rounded-lg">{props.text}</button>
    </div>
  )
}

export default Button
