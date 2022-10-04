import React from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

import { NavigationRoutes } from "../../data/routes";

export default function SignIn() {
	const navigate = useNavigate();
	return (
		<section className="h-screen text-white bg-gray-200 dark:bg-gray-900 dark:text-white">
			<div className="flex justify-center h-full pt-4">
				<div className="w-full h-full max-w-lg px-10 py-4 bg-white shadow-lg dark:bg-gray-700 rounded-xl lg:rounded-2xl">
					<div className="mb-4 text-center text-black">
						<h4 className="h3">OpenC</h4>
						<p className="font-medium">Sign in to our platform</p>
					</div>
					<form className="mt-8 space-y-4 text-primary dark:text-white">
						<div id="email" className="space-y-2 ">
							<label htmlFor="" className="h6">Your Email</label>
							<div className="flex items-center px-4 py-1 bg-white border border-black opacity-50 dark:bg-gray-700 rounded-xl dark:border-gray-500">
								<EnvelopeIcon className="w-5"/>
								<input autoFocus required type="email" placeholder="example@email.com"
								className="w-full mr-5 text-sm font-medium border-0 outline-none dark:bg-gray-700 placeholder:font-medium placeholder:text-sm focus:ring-0"/>
							</div>
						</div>
						<div id="email" className="space-y-2 ">
							<label htmlFor="" className="h6">Your Password</label>
							<div className="flex items-center px-4 py-1 bg-white border border-black opacity-50 dark:bg-gray-700 rounded-xl dark:border-gray-500">
								<LockClosedIcon className="w-5"/>
								<input required type="password" placeholder="Password"
								className="w-full mr-5 text-sm font-medium border-0 outline-none dark:bg-gray-700 placeholder:font-medium placeholder:text-sm focus:ring-0"/>
							</div>
						</div>
						<div className="flex justify-between">
							<div>
								<input type="checkbox" name="remember" className="dark:bg-gray-700 rounded-[4px] mr-2"/>
								<label htmlFor="forgotPassword" className="text-sm font-medium dark:bg-gray-700 lg:text-base lg:font-bold">Remember Me</label>
							</div>
							<Link to="/" className="text-xs lg:text-sm">Lost password?</Link>
						</div>
						<button type="submit" className="w-full font-bold btn-primary" onClick={()=>navigate("/home")}>Sign in</button>
					</form>

					<div className="flex items-center justify-center mt-8 text-black">
						<span className="">Not registered?
						<Link to={NavigationRoutes.Signup.path} className="font-medium" >
								Create account
							</Link>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
