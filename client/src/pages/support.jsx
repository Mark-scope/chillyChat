import React from 'react'
import Navbar from "../components/nav/Navbar"
import Sidebar from "../components/sidebar/Sidebar"

const Support = () => {
    return (
        <div className="flex">
            <div className="w-2/12">
                <Sidebar />
            </div>
            <div className="w-10/12 mx-auto">
                <Navbar />
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="w-5/12 px-4">
                            <h1 className="text-2xl font-bold mb-4">Support</h1>
                            <p>Do you need any technical support or are you facing any problems. Reach us via the forms.</p>
                        </div>
                        <div className="w-6/12 mt-28 mr-6 bg-white rounded-t-lg shadow-md"> 
                            <form className="w-full h-auto rounded-t-lg space-y-4">
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Full Name" />
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type="email" placeholder="Email" />
                                <textarea className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md" placeholder="Message"></textarea>
                                <button className="px-[16px] my-[10px] h-12 bg-navcolor text-white font-sans  rounded-lg">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;
