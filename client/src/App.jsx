import Navbar from "./components/nav/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Main from "./components/main/Main"
function App(){

  return(
    <>

    <Navbar></Navbar> 
    <div className="flex">
      <div className="basis-1/6 h-screen">
      <Sidebar></Sidebar>
      </div>
      <div className="basis-5/6 h-screen ml-2">
      <Main></Main>
      </div>
    </div>

    </>
    
  )
}
export default App