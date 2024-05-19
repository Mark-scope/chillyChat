import Navbar from "../components/nav/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import Main from "../components/main/Main"

import React from 'react'

const Overview = () => {
    return(
        <>
        <div className="flex flex-col">
          <Navbar className=" "></Navbar> 

          <div className="flex ">

            <div className="w-1/6 ">
            <Sidebar></Sidebar>
            </div>

            <div className="w-5/6 pt-10">
            <Main ></Main>
            </div>

          </div>
        </div>

    
        </>
    )
}

export default Overview
