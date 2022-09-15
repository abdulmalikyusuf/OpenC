import React, { useState } from 'react'
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import "react-datetime/css/react-datetime.css";

import SDPPillars from '../data/SDPPillars';
import stiCodes from '../data/stiCodes';


function ProjectForm() {
	const [startDate, setStartDate] = useState("")
	const [endDate, setEndDate] = useState("")

	return (
		<div className="">
			<form className="grid md:grid-cols-2 gap-4">
				<div className="col-span-full">
					<label htmlFor="" className="font-medium">Context or Basis of Project</label>
					<input required type="text" placeholder="The project is..." className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>
				<div className="col-span-full">
					<label htmlFor="" className="font-medium">Poject Name</label>
					<input required type="text" placeholder="E.g. Increasing acess to edcuation for Adolescent girls in Borno State" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium">Thematic Sector</label>
					<select defaultValue="0"className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm">
					<option value="0">Education</option>
					<option value="1">Agriculture</option>
					<option value="2">Empowernment</option>
					</select>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium">SDP Pillar</label>
					<select defaultValue="0" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm">
						{SDPPillars.map(pillar => (
							<option key={pillar.code} value={pillar.code}>{pillar.title}</option>
						))}
					</select>
				</div>
				<div className="col-span-full">
					<label htmlFor="" className="font-medium">STI Code</label>
					<select defaultValue="0"className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm">
						{stiCodes.map(sti => (
							<option key={sti.code} value={sti.code}>{`${sti.code}: ${sti.title}`}</option>
						))}
					</select>
				</div>
				<div className="col-span-full">
					<label htmlFor="" className="font-medium">Site Name (community and ward)</label>
					<input required type="text" placeholder="Shuwari garke" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>
						
				<div className="">
					<label htmlFor="" className="font-medium">LG Coverage</label>
					<select defaultValue="0"className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm">
						<option value="0">Gender</option>
						<option value="1">Female</option>
						<option value="2">Male</option>
					</select>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium">No of Target Beneficiaries</label>
					<input required type="number" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>

				<div className="">
					<label htmlFor="" className="font-medium">% Completion</label>
					<input required type="number" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium">No of Target Beneficiaries</label>
					<input required type="number" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>

				<div className="col-span-full">
					<label htmlFor="" className="font-medium">Progress Note</label>
					<textarea required row={10} className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>
				<div className="col-span-full">
					<label htmlFor="" className="font-medium">Project Donor</label>
					<input required type="text" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium">Budget</label>
					<input required type="number" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium">No of Target Beneficiaries</label>
					<input required type="number" className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>

				<div className="">
					<label htmlFor="" className="font-medium">Start Date</label>
					<Datetime timeFormat={false} onChange={setStartDate} renderInput={(props, openCalendar) => (
						<div className="flex items-center w-full border-2 rounded-lg px-2">
							<CalendarDaysIcon className="h-6 w-6"/>
							<input required type="text" value={startDate ? moment(startDate).format("MM/DD/YYYY") : ""}
								placeholder="mm/dd/yyyy" onFocus={openCalendar} onChange={() => { }} className="border-0 outline-none focus:ring-0 placeholder:font-medium text-sm placeholder:text-sm"/>
						</div>
					)}/>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium">End Date</label>
					<Datetime timeFormat={false} onChange={setEndDate} renderInput={(props, openCalendar) => (
						<div className="flex items-center w-full border-2 rounded-lg px-2">
							<CalendarDaysIcon className="h-6 w-6"/>
							<input required type="text" value={endDate ? moment(endDate).format("MM/DD/YYYY") : ""}
								placeholder="mm/dd/yyyy" onFocus={openCalendar} onChange={() => { }} className="border-0 outline-none focus:ring-0 placeholder:font-medium text-sm placeholder:text-sm"/>
						</div>
					)} />
				</div>

				<div className="col-span-full">
					<label htmlFor="" className="font-medium">Subgrantee (If applicable) Kindly fill Organizations you are subgranting for each activity line if applicable</label>
					<textarea required row={3} className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>

				<div className="col-span-full">
					<label htmlFor="" className="font-medium">Contact Person from your organization (Name, email and Phone number)</label>
					<textarea required row={3} className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm"/>
				</div>
			

			<div className="mt-3">
				<button type="submit" className="btn-primary">Save All</button>
			</div>
			</form>
		</div>
	)
}

export default ProjectForm