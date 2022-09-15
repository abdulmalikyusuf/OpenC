import React from "react";
import { EnvelopeIcon, LockOpenIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";

import { NavigationRoutes } from "../../data/routes";
import BgImage from "../../assets/img/BOSGCover.jpg";
import BOSG from "../../assets/img/BOSG.jpeg";

export default function SignIn() {
	const navigate = useNavigate();
	return (
		<section className="bg-gray-200 h-screen">
			<div className="flex justify-center pt-4 h-full">
				<div className="bg-white shadow-lg rounded-xl lg:rounded-2xl px-10 py-4 w-full max-w-lg">
					<div className="">
						<img src={BOSG} alt="Borno State Gov't Logo" className="rounded-full mx-auto" />
					</div>
					<div className="text-center mb-4">
						<h4 className="h4">TrackBorno25</h4>
						<p className="font-medium text-sm">Sign in to our platform</p>
					</div>
					<form className="space-y-4 mt-8 text-primary">
						<div id="email" className=" space-y-2">
							<label htmlFor="" className="h5">Your Email</label>
							<div className="flex items-center px-4 py-1 opacity-50 bg-white rounded-xl border border-black">
								<EnvelopeIcon className="w-5"/>
								<input autoFocus required type="email" placeholder="example@company.com"
								className="w-full placeholder:font-medium text-sm placeholder:text-sm focus:ring-0 border-0 font-medium outline-none mr-5"/>
							</div>
						</div>
						<div id="email" className=" space-y-2">
							<label htmlFor="" className="h5">Your Password</label>
							<div className="flex items-center px-4 py-1 opacity-50 bg-white rounded-xl border border-black">
								<LockOpenIcon className="w-5"/>
								<input required type="password" placeholder="Password"
								className="w-full placeholder:font-medium text-sm placeholder:text-sm focus:ring-0 border-0 font-medium outline-none mr-5"/>
							</div>
						</div>
						<div className="flex justify-between">
							<div>
								<input type="checkbox" name="remember" className="rounded-[4px] mr-2"/>
								<label htmlFor="forgotPassword" className="text-sm lg:text-base font-medium lg:font-bold">Remember Me</label>
							</div>
							<p className="text-xs lg:text-sm">Lost password?</p>
						</div>
						<button type="submit" className="btn-primary w-full font-bold" onClick={()=>navigate("/home")}>Sign in</button>
					</form>

					<div className="flex justify-center items-center mt-8">
						<span className="">Not registered?
						<a href={NavigationRoutes.Signup.path} className="font-medium" >
								Create account
							</a>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
