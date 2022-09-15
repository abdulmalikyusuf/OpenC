import React from 'react'
import { UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

function Navbar() {
    
    return (
        <header className={`sticky top-0 flex justify-end items-center bg-primary text-white py-2 px-8 -ml-20 md:ml-0`}>
            {/* <button type="button" className="cursor-pointer focus:outline-none focus:ring-0" onClick={()=>toggleSidebar(prev => !prev)}>
                {isOpen ? 
                <XMarkIcon className='w-8'/>:
                <Bars3Icon className='w-8'/>
                }
            </button> */}
            <div className="bg-white rounded-full p-2"><UserIcon className='w-6 text-black'/></div>
        </header>
    )
}

export default Navbar