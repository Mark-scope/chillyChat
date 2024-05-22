import Balance from "./Balance"
import Profile from "./Profile"
function Navbar(){
    return(
        <nav className="w-full h-20 bg-white z-10 shadow-md flex  items-center px-12">
           
            <div className="w-1/2">                
                <h1 className=' text-xl text-violet '>
                <span className='font-bold'>Chilly</span>chat
                </h1>
            </div>

            <div className="flex justify-end items-center w-1/2">
                <Balance></Balance>
                <Profile name="John"></Profile>
            </div>

        </nav>
    )
    
}
export default Navbar