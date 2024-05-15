import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=" w-16 p-3 bg-navcolor text-white font-sans mt-4 ml-4 rounded-lg">{props.text}</button>
    </div>
  )
}

export default Button
