import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon, UserGroupIcon } from "@heroicons/react/24/solid";

import { NavigationRoutes } from "../../data/routes";


export default function Signup() {
	const navigate = useNavigate()
  return (
    <section className="h-screen bg-gray-200 dark:bg-gray-900 dark:text-white">
		<div className="flex justify-center h-full pt-4">
			<div className="w-full max-w-lg px-10 py-4 bg-white shadow-lg dark:bg-gray-700 h-fit rounded-xl lg:rounded-2xl">
				<div className="mb-4 text-center">
					<h4 className="h3">OpenC</h4>
					<p className="font-medium">Sign up to our platform</p>
				</div>
				<form className="mt-8 space-y-4 text-primary dark:text-white">
					<div id="email" className="space-y-2 ">
						<label htmlFor="" className="h6">Your Email</label>
						<div className="flex items-center px-4 py-1 bg-white border border-black opacity-50 dark:bg-gray-700 rounded-xl">
							<EnvelopeIcon className="w-5"/>
							<input autoFocus required type="email" placeholder="example@email.com"
							className="w-full mr-5 text-sm font-medium border-0 outline-none dark:bg-gray-700 placeholder:font-medium placeholder:text-sm focus:ring-0 dark:border-gray-500"/>
						</div>
					</div>
					<div id="email" className="space-y-2 ">
						<label htmlFor="" className="h6">Name of Organization</label>
						<div className="flex items-center px-4 py-1 bg-white border border-black opacity-50 dark:bg-gray-700 rounded-xl">
							<UserGroupIcon className="w-5"/>
							<input autoFocus required type="text" placeholder=""
							className="w-full mr-5 text-sm font-medium border-0 outline-none dark:bg-gray-700 placeholder:font-medium placeholder:text-sm focus:ring-0 dark:border-gray-500"/>
						</div>
					</div>
					<div id="email" className="space-y-2 ">
						<label htmlFor="" className="h6">Your Password</label>
						<div className="flex items-center px-4 py-1 bg-white border border-black opacity-50 dark:bg-gray-700 rounded-xl">
							<LockClosedIcon className="w-5"/>
							<input required type="password" placeholder="Password"
							className="w-full mr-5 text-sm font-medium border-0 outline-none dark:bg-gray-700 placeholder:font-medium placeholder:text-sm focus:ring-0 dark:border-gray-500"/>
						</div>
					</div>
					<div className="pt-10">
						<button type="submit" className="w-full font-bold btn-primary" onClick={()=>navigate("/home")}>Sign up</button>

					</div>
				</form>

				<div className="flex items-center justify-center mt-8">
					<span className="mr-2">Already have an account?
					<Link to={NavigationRoutes.Signin.path} className="font-medium" >Login here</Link>
					</span>
				</div>
			</div>
		</div>
	</section>
  );
};
