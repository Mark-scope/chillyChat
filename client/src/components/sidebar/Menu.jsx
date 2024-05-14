function Menus(){
    return(
        <div className="flex-col w-full h-80 mt-28">
            <ul className="h-full flex-col gap-y-5">
                <li className="w-full h-14 text-center pt-4 hover:bg-white hover:text-violet"><a href="#" className="h-full p-5 px-11 text-white hover:text-violet">Overview</a></li>
                <li className="w-full h-14 text-center pt-4 hover:bg-white hover:text-violet"><a href="#" className="h-full p-5 px-11 text-white hover:text-violet">Contacts</a></li>
                <li className="w-full h-14 text-center pt-4 hover:bg-white hover:text-violet"><a href="#" className="h-full p-5 px-14 text-white hover:text-violet">SMS</a></li>
                <li className="w-full h-14 text-center pt-4 hover:bg-white hover:text-violet"><a href="#" className="h-full p-5 px-11 text-white hover:text-violet">Report</a></li>
                <li className="w-full h-14 text-center pt-4 hover:bg-white hover:text-violet"><a href="#" className="h-full p-5 px-11 text-white hover:text-violet">Support</a></li>
            </ul>
        </div>
    )
}
export default Menus