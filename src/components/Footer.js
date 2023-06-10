import React from "react";

import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Youtube } from "../assets/svg/youtube.svg";

const currentYear = new Date().getFullYear()

function Footer({ dashboard=false }) {
    return (
		<div className="py-5 bg-primary">
			{dashboard && 
				<div className="p-5 mx-64 text-white bg-brand-green/80 rounded-2xl">
					<div className="">
						<h5 className="text-xl font-bold">Sign up for email alerts</h5>
						<p className="text-xs font-medium">Stay current with our latest projects</p>
						<div className="flex flex-col mt-8 space-y-2 text-gray-900 lg:space-y-0 lg:flex-row col-span-full md:col-span-1 lg:col-span-6">
							<input required type="text" placeholder="Enter Email Address" className="w-full max-w-sm text-sm rounded-lg dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm"/>
							<button className="px-8 py-2 font-medium text-gray-300 border-2 border-white rounded-lg bg-brand-green-light-02 lg:ml-4 hover:text-gray-100 hover:bg-brand-green-hover">
								Submit
							</button>
						</div>
					</div>	
				</div>
			}
			<div className="w-full px-64 mt-5 text-white bg-primary">
				<div className="flex flex-col space-y-8 md:flex-row md:space-y-0 bg-primary md:justify-between md:items-start">
					<div className="flex items-center justify-center space-x-2">
						<img src={process.env.PUBLIC_URL+"Logo.png"} alt="OpenC Logo" className="h-8"/>
						<h2 className="text-lg font-bold leading-none">OpenC</h2>
					</div>
						<p className="text-sm text-brand-beige">© Copyright {currentYear} OpenC.</p>
					<div className="flex space-x-8">
						<Instagram/>
						<Facebook/>
						<Youtube/>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Footer

{/* <footer className="text-xs font-medium text-white text-primary dark:text-white md:text-sm lg:text-base">
	<p className="text-center">
	Copyright © {`${new Date().getFullYear()} `}
	<a href="https://vuetifysolutions.netlify.app" target="_blank" rel="noreferrer" className="">
		Designed by Vuetify Solutions
	</a>
	</p>
</footer> */}