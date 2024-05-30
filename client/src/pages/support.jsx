import Navbar from "../components/nav/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import Button from "../components/Button"
import Input from "../components/inputs/Input"

  

const Support = () => {
    return (
        <div className="flex flex-col">
          <Navbar className=" "></Navbar> 

          <div className="flex ">

            <div className="w-1/6 ">
            <Sidebar></Sidebar>
            </div>


            {/* main content */}
            <div className="flex w-5/6 flex-row m-12">

                <div className="w-1/2">
                    <div className=" pr-4">
                        <h1 className="text-2xl mb-4">Support</h1>
                        <p>Do you need any technical support or are you facing any problems. Reach us via the forms.</p>
                    </div>
                </div>

                <div className="flex-col w-1/2 p-8 bg-white rounded-[10px] shadow-lg">

                    <Input placeholder="Fullname" type="text" ></Input>
                    <Input placeholder="Email" type="text" ></Input>
                    <Input placeholder="Subject" type="text" ></Input>
                    <Input placeholder="Message" type="textarea" ></Input>
                    <Button className="m-8" text="Send Message"></Button>
                
                </div>

            
            </div>

          </div>
        </div>
    );
}

export default Support;
