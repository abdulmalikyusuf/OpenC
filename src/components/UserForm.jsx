import React from 'react'


export default function UserForm() {
  	return (
    	<div className="">
			<p className="text-sm font-extralight">General information</p>
			<form className="grid md:grid-cols-2 gap-4">
				<div className="">
					<label htmlFor="" className="font-medium">First Name</label>
					<input required type="text" placeholder="Enter your first name" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium">Last Name</label>
					<input required type="text" placeholder="Also your last name" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm" />
				</div>
				<div className="col-span-full">
					<label htmlFor="" className="font-medium">Organization</label>
					<textarea required rows="5" placeholder="Your organization" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm" />
				</div>
				<div className="">
					<label htmlFor="" className="font-medium">Email</label>
					<input required type="email" placeholder="name@company.com" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="font-medium">Phone</label>
					<input required type="tel" placeholder="+23 490 123 456" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="font-medium">Password</label>
					<input required type="password" placeholder="***************" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="font-medium">Confirm Password</label>
					<input required type="password" placeholder="***************" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm" />
				</div>
				<div className="mt-3 col-span-full">
					<button type="submit" className="btn-primary">Save All</button>
				</div>
			</form>
      	</div>
  	)
}