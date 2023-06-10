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
        <main className="text-black dark:text-white">
            <Sidebar/>
            <div className={`md:ml-64 bg-gray-100 dark:bg-gray-900`}>
                <Navbar/>
                <div className="min-h-screen px-2 md:px-4 lg:px-6">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </main>
	);
}

export default Template;
