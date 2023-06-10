import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { Link, NavLink, Outlet } from "react-router-dom"

import Footer from '../../components/Footer'
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Youtube } from "../../assets/svg/youtube.svg";


function HomePage() {
    return (
        <div className="flex flex-col">
            <Popover>
                <header className="flex items-center justify-between w-full px-4 py-1 space-x-10 text-white md:px-20 md:py-6 lg:space-x-20 bg-primary dark:bg-gray-900 dark:text-white">
                    <div className="flex items-center justify-center -my-6 space-x-1 md:space-x-2">
                        <img src={process.env.PUBLIC_URL+"Logo.png"} alt="OpenC Logo" className="h-10 md:h-14"/>
                        <h2 className="text-xl font-bold leading-none md:text-3xl">OpenC</h2>
                    </div>
                    <Popover.Button className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg outline-none focus:ring-0 md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">
                            Open main menu
                        </span>
                        <Bars3BottomRightIcon className="w-8 h-8 text-brand-green" aria-hidden="true"/>
                    </Popover.Button>
                    <nav className="hidden space-x-10 font-medium list-none md:flex font-exo">
                        <NavLink to="/" className={({isActive}) => `${isActive && "font-bold border-b-2 text-brand-green border-brand-green"}`}>Home</NavLink>
                        <NavLink to="/" className={({isActive}) => `${isActive && "font-bold border-b-2 text-brand-green border-brand-green"}`}>Projects</NavLink>
                        <NavLink to="/visualization" className={({isActive}) => `${isActive && "font-bold border-b-2 text-brand-green border-brand-green"}`}>Visualization</NavLink>
                        <NavLink to="/dashboard" className={({isActive}) => `${isActive && "font-bold border-b-2 text-brand-green border-brand-green"}`}>Dashboard</NavLink>
                        <NavLink to="/contact" className={({isActive}) => `${isActive && "font-bold border-b-2 text-brand-green border-brand-green"}`}>Contact</NavLink>
                    </nav>
                </header>

                <Transition
                    as={React.Fragment}
                    enter="duration-75 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-75 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <Popover.Panel static className="fixed inset-x-0 top-0 z-10 h-screen p-2 transition origin-top-right transform md:hidden"								>
                        <div className="rounded-lg bg-brand-green px-6 py-4 h-full overflow-hidden space-y-[60px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center -my-6 space-x-2">
                                    <img src={process.env.PUBLIC_URL+"Logo.png"} alt="OpenC Logo" className="h-14"/>
                                    <h2 className="text-3xl font-bold leading-none text-white">OpenC</h2>
                                </div>
                                <Popover.Button className="text-white focus:outline-none focus:ring-0">
                                    <span className="sr-only">Close main menu</span>
                                    <XMarkIcon className="w-10 h-10" aria-hidden="true"/>
                                </Popover.Button>
                            </div>
                            <nav className="flex flex-col-reverse space-y-8 space-y-reverse text-lg font-bold text-center text-brand-beige">
                                <Popover.Button as={Link} to="/contact">Contact</Popover.Button >
                                <Popover.Button as={Link} to="/dashboard">Dashboard</Popover.Button >
                                <Popover.Button as={Link} to="/visualization">Visualization</Popover.Button >
                                <Popover.Button as={Link} to="/">Projects</Popover.Button >
                                <Popover.Button as={Link} to="/" className="font-bold border-b-2 border-brand-green border-spacing-8">
                                Home
                                </Popover.Button >
                            </nav>
                            <div className="flex flex-col items-center mt-8 space-y-10">
                                <Popover.Button type="button" className="bg-white btn-primary text-brand-green w-fit">Agende sua consulta</Popover.Button>
                                <div className="flex space-x-8">
                                    <Instagram/>
                                    <Facebook/>
                                    <Youtube/>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
            
            <div className="flex-1">
                <Outlet/>
            </div>
            <div className="mt-20">
                <Footer dashboard={true}/>
            </div>
        </div>
    )
    }

export default HomePage