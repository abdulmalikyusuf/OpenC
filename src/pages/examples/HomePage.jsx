import React from 'react'
import { Link, Outlet } from "react-router-dom"

function HomePage() {
    return (
        <>
            <header className="flex items-center justify-between w-full px-20 py-6 space-x-10 text-white lg:space-x-20 bg-primary dark:bg-gray-900 dark:text-white">
                <h2 className="text-3xl font-bold leading-none">OpenC</h2>
                <nav className="flex space-x-10 font-medium list-none">
                    <Link to="/">Home</Link>
                    <Link to="/">Projects</Link>
                    <Link to="/home">Visualization</Link>
                    <Link to="/">Dashboard</Link>
                    <Link to="/">Contact</Link>
                </nav>
            </header>
            <Outlet/>
        </>
    )
    }

export default HomePage