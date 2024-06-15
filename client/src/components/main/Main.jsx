import Buycard from "../cards/Buycard";
import Idcard from "../cards/Idcard";
import Table from "../cards/Table";
import PopupBox from "../cards/popupBox";

function Main(){
    return(        
            <div className=" flex flex-row p-8">

                <div className="w-[70%] mr-4">
                    <Table ></Table>
                </div>
                
                <div className="flex-col w-[30%] ml-4 ">
                    <Buycard></Buycard>
                    <Idcard></Idcard>
                </div>
                <div className="w-full h-full absolute z-10">
                    <div id ="pop" className="w-full h-full absolute z-20  ">
                        <PopupBox></PopupBox>
                    </div>
                
                </div>

            </div>
    )
}
export default Main