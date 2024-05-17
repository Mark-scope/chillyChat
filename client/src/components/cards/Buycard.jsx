import Select from "../inputs/Select"
import Input from "../inputs/Input"
import Button from "../Button"

function Buycard(){
    const options = [
        { value: '5.00', text: '5.00' },
        { value: '10.00', text: '10.00' },
        { value: '15.00', text: '15.00' },
        { value: '20.00', text: '20.00' },
        { value: '25.00', text: '25.00' },
        { value: '30.00', text: '30.00' },
    ];
    
    return(
        <div className="flex flex-col justify-center align-center w-full bg-white shadow-md rounded-lg p-8">
            
            <div className=""><p className="text-lg pt-3">Buy Credit</p></div>
            <div className="">
                <Select options={options} />
                <Input></Input>
                <div className="mt-5"><p className="text-lg text-textcolor">Equivalent Credit</p></div>
                <div className="mt-2"><h1 className="text-lg text-textcolor font-bold"><span>0</span> Units</h1></div>
                <Button className="m-8" text="Buy"></Button>
            </div>

            
           
        </div>
    )
}
export default Buycard



