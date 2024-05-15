import Navbar from "../components/nav/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import Main from "../components/main/Main"

import React from 'react'

const Overview = () => {
    return(
        <>
    
        <Navbar></Navbar> 
        <div className="flex">
          <div className="basis-1/6 h-screen">
          <Sidebar></Sidebar>
          </div>
          <div className="basis-5/6 h-screen ml-2 overflow-y-hidden">
          <Main></Main>
          </div>
        </div>
    
        </>
    )
}

export default Overview
