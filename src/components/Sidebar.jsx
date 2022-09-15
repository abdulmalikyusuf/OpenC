import React from 'react'
import { LockClosedIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom'

import menu from '../data/menu' 
import MenuItem from './MenuItem'


function Sidebar() {
    return (
        <Popover>
        {({open}) => (
            <>
                <div className={`hidden md:block fixed top-0 left-0 h-screen w-20 p-6 bg-main text-white transition-all duration-300 z-30`}>
                    <Popover.Button className="z-30 -mt-4" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-10 w-10 text-white" aria-hidden="true"/>
                    </Popover.Button>
                    <nav className="space-y-4 text-sm mt-20">
                        {menu.map((item, idx) => (
                            <MenuItem key={item.title} icon={item.icon} title={item.title} navlink={item.link}/>
                        ))}
                    </nav>
                    <div className="absolute bottom-0 inset-x-0 m-4 mt-0">
                        <button type="button" className={`bg-red-700 blur-0 py-2 w-full text-lg font-medium rounded-lg items-center`}>
                            <LockClosedIcon className="inline-flex w-6"/>
                            <span className={`hidden`}>Logout</span>
                        </button>
                    </div>
                </div>

                <Popover.Button className="fixed top-0 md:hidden p-2 pl-4 text-red-500 z-30" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-10 w-10 text-white" aria-hidden="true"/>
                </Popover.Button>
                
                <Transition className="fixed inset-0 z-40 overflow-hidden">
                    <Transition.Child
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Popover.Overlay className="absolute inset-0 bg-opacity-50 backdrop-blur backdrop-filter opacity-30" />
                    </Transition.Child>

                    <Transition.Child
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="tranlate-x-full md:translate-x-0"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="-translate-x-0"
                        leaveTo="-translate-x-full">
                        <Popover.Panel static className="pointer-events-none absolute inset-0 z-40 translate-x-0 h-full w-64">
                            <div className="bg-main overflow-hidden pointer-events-auto h-full min-h-screen transition-all duration-300 z-30 text-white px-10">
                                <div className="grid grid-rows-2 h-screen">
                                    <div className="place-self-start">
                                        <Popover.Button className="relative p-2 text-red-500" aria-controls="mobile-menu-2" aria-expanded="false">
                                            <span className="sr-only">Close main menu</span>
                                            <XMarkIcon className="h-10 w-10 text-white fixed right-0" aria-hidden="true"/>
                                        </Popover.Button>
                                        <h1 className={`text-2xl font-bold mb-20`}>TrackBorno25</h1>
                                        <nav className="space-y-4 text-sm mt-10">
                                            {menu.map((item, idx) => (
                                                <Popover.Button as={NavLink}  to={item.link} key={item.title} className={({ isActive }) => `-mx-2 pl-2 block ${isActive && "bg-opacity-90 border-l-4 border-blue-800"} hover:bg-opacity-90 hover:border-l-4 hover:border-blue-800`}>
                                                    <div className={`flex space-x-2 items-center`}>
                                                        <span className="">{item.icon}</span>
                                                        <span className="">{item.title}</span>
                                                    </div>
                                                </Popover.Button>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="absolutef inset-fx-0 place-self-end mb-4">
                                        <button type="button" className={`flex bg-red-700 blur-0 px-12 py-2 w-full text-lg font-medium rounded-lg items-center`}>
                                            <LockClosedIcon className="inline-flex w-6"/>
                                            <span className={``}>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition.Child>
                </Transition>
            </>

        )}
</Popover>
        
    )
}

export default Sidebar


{/* <div className={`md:block fixed top-0 left-0 h-screen ${isOpen ? "w-64 p-8": "w-20 p-6 hidden"} bg-main text-white transition-all duration-300 z-30`}>
            <h1 className={`${isOpen ?"":"hidden"} text-2xl font-bold mb-20`}>TrackBorno25</h1>
            <nav className="space-y-4 text-sm mt-10">
                {menu.map((item, idx) => (
                    <MenuItem key={item.title} icon={item.icon} title={item.title} navlink={item.link}/>
                ))}
            </nav>
            <div className="absolute bottom-0 inset-x-0 m-4 mt-0">
                <button type="button" className={`bg-red-700 blur-0 ${isOpen && "px-12"} py-2 w-full text-lg font-medium rounded-lg items-center`}>
                    <LockClosedIcon className="inline-flex w-6"/>
                    <span className={`${isOpen ? "":"hidden"}`}>Logout</span>
                </button>
            </div>
        </div> */}