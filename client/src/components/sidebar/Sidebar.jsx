import Menus from "./Menu"
function Sidebar(){
    return(
        <div className="h-screen flex-col fixed w-40 bg-navcolor z-0 top-0 left-0">
            <Menus></Menus>
        </div>
    )
}
export default Sidebar