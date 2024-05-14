import Menus from "./Menu"
function Sidebar(){
    return(
        <div className="h-full flex-col fixed w-40 bg-navcolor left-0">
            <Menus></Menus>
        </div>
    )
}
export default Sidebar