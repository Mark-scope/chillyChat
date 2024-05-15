import Buycard from "../cards/Buycard";
import Idcard from "../cards/Idcard";
import Table from "../cards/Table";
function Main(){
    return(        
            <div className=" flex flex-row">

                <div className="w-[70%] mx-8">
                    <Table ></Table>
                </div>

                <div className="flex-col w-[30%] mx-4 ">
                    <Buycard></Buycard>
                    <Idcard></Idcard>
                </div>

            </div>
    )
}
export default Main