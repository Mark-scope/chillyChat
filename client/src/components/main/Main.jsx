import Buycard from "../cards/Buycard";
import Idcard from "../cards/Idcard";
function Main(){
    return(
        <>
        
            <div >
                <div className="flex-col absolute left-3/4 top-24 h-screen w-92">

                    <Buycard></Buycard>
                    <Idcard></Idcard>
                </div>
            </div>
       
        </>
    )
}
export default Main