import Select from "../inputs/Select"
import Input from "../inputs/Input"
import Button from "../Button"

function Buycard(){
    return(
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg ">
            
            <div className="ml-4 mt-5"><p className="text-lg pt-3">Buy Credit</p></div>
            <div className="mt-4 w-80">
                <Select> </Select>
                <Input></Input>
                <div className="ml-4 mt-5"><p className="text-lg text-textcolor">Equivalent Credit</p></div>
                <div className="ml-6 mt-2"><h1 className="text-lg text-textcolor font-bold"><span>230</span> Units</h1></div>
                <Button text="Buy"></Button>
            </div>

            
           
        </div>
    )
}
export default Buycard