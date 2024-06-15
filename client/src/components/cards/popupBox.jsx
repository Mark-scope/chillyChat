import React from 'react'
import Input from '../inputs/Input'
import Button from '../Button'
const PopupBox = () => {
  return (
    <div className='m-auto w-521 h-60 z-30  rounded-md p-6 shadow-md bg-white'>
        <p>Sender's ID</p>
      <Input type="text" placeholder = "ID Name"></Input>
      <Input type = "textarea" placeholder = "Purpose"></Input>
      <Button text="Create ID"></Button>
    </div>
  )
}

export default PopupBox

