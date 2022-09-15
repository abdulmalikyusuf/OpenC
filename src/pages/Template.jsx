import React from 'react';
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export function BlankPage() {
    return (
      <>
        <Outlet />
      </>
    )
}



function Template() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);
    
    
	return (
        <main className="">
            <Sidebar/>
            <div className={`md:ml-20 bg-gray-100`}>
                <Navbar/>
                <div className="px-2 md:px-4 lg:px-10 min-h-screen">
                {/* //flex justify-center items-center h-screen bg-blue-100 */}
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </main>
	);
}

export default Template;
