import Navbar from "../components/nav/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import Select from "../components/inputs/Select"
import Button from "../components/Button"
import Input from "../components/inputs/Input"

const QuickSms = () => {

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
        <div className="flex flex-col">
          <Navbar className=" "></Navbar> 

          <div className="flex ">

            <div className="w-1/6 ">
            <Sidebar></Sidebar>
            </div>

            {/* main content */}
            <div className=" flex w-5/6 p-8 bg-white rounded-[10px] shadow-sm m-8">
              
              <div className="flex flex-col h-full w-1/2 p-4 ">
      
                <h2 className="text-lg">Senders ID</h2>
                <Select options={senderOptions} />
                <p className="text-[#737373] pt-4" >Sender’s ID doesn’t exist, create new one with a click below </p>
                <Button  text="Create ID"></Button>
              
                <Input placeholder="Message" type="textarea" ></Input>
                {/* <p className="pb-4" ></p> */}
                <Button className="m-8" text="Send"></Button>                

              </div>


              <div className="w-1/2 h-full p-4 ">
                <h2 className="text-lg">Select Recipients</h2>
                <Select options={recipientOptions} />
                  
              </div>

            
            </div>

          </div>
        </div>

  )
}

export default QuickSms
