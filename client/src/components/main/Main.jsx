import Buycard from "../cards/Buycard";
import Idcard from "../cards/Idcard";
import Table from "../cards/Table";
function Main(){
    return(
        <>
        
            <div >
                <Table></Table>
                <div className="flex-col absolute left-3/4 top-24 h-screen w-92">

                    <Buycard></Buycard>
                    <Idcard></Idcard>
                </div>
            </div>
       
        </>
    )
}
export default Main