import Balance from "./Balance"
import Profile from "./Profile"
function Navbar(){
    return(
        <nav className="w-full h-20 bg-white z-10 shadow-md flex">
            <Balance></Balance>
            <Profile name="John"></Profile>

        </nav>
    )
    
}
export default Navbar