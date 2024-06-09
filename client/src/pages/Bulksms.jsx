import React from 'react'
import Navbar from '../components/nav/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Button from '../components/Button'
import Input from '../components/inputs/Input'
import Select from '../components/inputs/Select'

const Bulksms = () => {
    const senderOptions = [
        {choose: "Choose ID"},
        { value: '123435', text: '123435' },
        { value: '253435', text: '253435' },
        { value: '983435', text: '983435' }
    ];
    
      const recipientOptions = [
        {choose: "Choose Recipients"},
        { value: '123435', text: '123435' },
        { value: '253435', text: '253435' },
        { value: '983435', text: '983435' }
      ];
  return (
    <div className="">
        <Navbar></Navbar>

        <div className='flex'>
            {/* sidebar */}
            <div className='w-1/6'>
                <Sidebar></Sidebar>
            </div>

            {/* main content */}
            <div className='w-5/6 p-8'>
                <h2 className='text-[32px]'>Bulk Sms</h2>

                <div className='p-8 flex bg-white rounded-[10px] shadow-sm my-4 space-x-6'>

                    <div className="flex flex-col h-full w-1/2 p-4 ">
        
                        <h2 className="text-lg">Senders ID</h2>
                        <Select options={senderOptions} />
                        <p className="text-[#737373] pt-4" >Sender’s ID doesn’t exist, create new one with a click below </p>
                        <Button  text="Create ID"></Button>
                        <br/>
                        <Input placeholder="Message" type="textarea" ></Input>
                                      

                    </div>

                    <div className="w-1/2 h-full p-4 ">
                        <h2 className="text-lg"> Recipients</h2>
                      
                        <div  className='flex  h-full flex-col item-space-between'>
                            <Input placeholder="Phone Number Separated by comma or Move to next line" type="textarea" ></Input>
                            <br/>
                            <Input placeholder="Subject" type="text" ></Input>
                            <br />
                            <Button className="m-8" text="Send Message"></Button> 
                        </div>

                    </div>



                </div>
 
            </div>

        </div>

    </div>
  )
}

export default Bulksms