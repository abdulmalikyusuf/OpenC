import React from 'react'
import { UserIcon } from "@heroicons/react/24/outline"
import Toggle from './Switch'

function Navbar() {
    
    return (
        <header className={`flex justify-end space-x-10 lg:space-x-20 items-center bg-primary dark:bg-gray-900 dark:bg-gray-900 text-white dark:text-white text-white dark:text-white py-2 px-8 -ml-20 md:ml-0`}>
                <Toggle/>
            <div className="bg-white dark:bg-gray-700 rounded-full p-2">
                <UserIcon className='w-6 text-black'/>
            </div>
        </header>
    )
}

export default Navbar