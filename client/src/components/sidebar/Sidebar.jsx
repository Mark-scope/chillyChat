import Menus from "./Menu"
function Sidebar(){
    return(
        <div className="h-screen flex-col fixed w-40 bg-navcolor z-10 top-0 left-0">
            <div className="text-white mt-5 text-center text-xl"><h1><span className="font-bold ">Chilly</span>chat</h1></div>
            <Menus></Menus>
        </div>
    )
}
export default Sidebar