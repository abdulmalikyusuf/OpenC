import { RadioGroup } from '@headlessui/react';
import { FolderIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from "yup"

const pages = [
	{pageNumber: 1, element: Details},
	{pageNumber: 2, element: FormOne},
	{pageNumber: 3, element: SourceOfFunding},
	{pageNumber: 4, element: LastForm}
]
const schema = object().shape({
	activity_title: string().required(),
	thematic_sector: string().required(),
	sdp_pillar: string().required(),
	sti_code: string().required(),
	indicator: string().required(),
	activity: string().required(),

})



function ActivityForm({ onClose }) {
	const [selected, setSelected] = React.useState(pages[0])
	const [formdata, setFormdata] = React.useState(() => {
		const json = localStorage.getItem("formdata")
		return JSON.parse(json)??{}
	})

	const { handleSubmit, register, watch, formState: { errors, isValid }} = useForm({ mode: "onBlur", defaultValues: formdata, resolver: yupResolver(schema)})
	const handleChange = e => {
		setFormdata({...formdata, [e.target.name]: e.target.value})
	}

	const handleSave = () => {
		localStorage.setItem("formdata", JSON.stringify(formdata))
	}
	const onSubmit = e => {
		e.preventDefault();
		onClose()
	}
	
	
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2">
			<div className="col-span-full">
				<RadioGroup value={selected} onChange={setSelected} className="mx-auto sm:w-1/2">
					<RadioGroup.Label className="sr-only">Step</RadioGroup.Label>
					<div className="flex justify-center">
						<span className="relative z-0 inline-flex justify-center w-full px-3 pb-1 space-x-10">
							{pages.map((page, i) => (
								<RadioGroup.Option value={page} key={page.pageNumber}
									className="relative transition rounded-full cursor-pointer focus-visible:z-10 focus-visible:outline-none ring-offset-2 ring-2 ring-offset-gray-50 ring-gray-50 focus-visible:ring-blue-500 tap-highlight-transparent">
									{({ checked }) => 
									<span
										className={`${
										checked ? "bg-blue-500 text-white border-blue-500":
												"text-gray-400 border-gray-200"}
												rounded-full w-10 h-10 border inline-flex items-center justify-center
												transition-colors`}>
										{page.pageNumber}
									</span>}
								</RadioGroup.Option>
								))
							}
						</span>
					</div>
				</RadioGroup>

			</div>
			
			
			{<selected.element register={register} formErrors={errors} formdata={formdata} handleChange={handleChange}/>}


			<div className="mt-3 space-x-4 md:space-x-10 col-span-full">
				<div className="flex items-center justify-between">
					<button type="submit" className="bg-blue-500 btn-primary">Create</button>
					<div className="flex items-center justify-center space-x-4">
						<button type="button" onClick={() => setSelected(prev => pages[prev.pageNumber >= 2? prev.pageNumber-2: 0])} className="p-2 bg-gray-200 rounded-full"><ChevronLeftIcon className="w-8 h-8"/></button>
						<button type="button" onClick={handleSave} className="p-2 bg-gray-200 rounded-full"><FolderIcon className="w-8 h-8"/></button>
						<button type="button" onClick={() => setSelected(prev => pages[prev.pageNumber !== 4? prev.pageNumber: 3])} className="p-2 bg-gray-200 rounded-full"><ChevronRightIcon className="w-8 h-8"/></button>
					</div>
				</div>
			</div>
		</form>
	)
}

export default ActivityForm


function Details({ formdata, handleChange, register, formErrors }) {
	const {activity_title, sdp_pillar, thematic_sector, sti_code, activity, indicator } = formErrors
  return (
	<>
		<div className="col-span-full">
			<label htmlFor="" className="font-medium">Title of Activity</label>
			<input required type="text" {...register("activity_title")} placeholder="The project is..." className={`${activity_title&&"border-red-500 focus:border-red-500 focus:ring-red-500" } w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm`}/>
			<p className="text-xs text-red-500">{activity_title?.message}</p>
		</div>
		<div className="">
			<label htmlFor="" className="font-medium">Thematic Sector</label>
			<select {...register("thematic_sector")}  className={`${thematic_sector&&"border-red-500 focus:border-red-500 focus:ring-red-500"} w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm`}>
				<option value=""></option>
				<option value="0">Education</option>
				<option value="1">Agriculture</option>
				<option value="2">Empowernment</option>
			</select>
			<p className="text-xs text-red-500">{thematic_sector?.message}</p>
		</div>
		
	</>
  )
}

function FormOne(props) {
	return (
	  	<>
		  <div className="">
			  <label htmlFor="" className="font-medium">Activity Target</label>
			  <select defaultValue="0"className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
			  <option value="0">Short Term</option>
			  <option value="1">Medium Term</option>
			  <option value="2">Long Term</option>
			  </select>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Month of Report</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Quarter</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Priority</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Implementing MDA</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Responsible Person</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="col-span-full">
			  <label htmlFor="" className="font-medium">Output</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Implementing Partner</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Status of Implentation</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
	  </>
	)
}

function SourceOfFunding(props) {
	return (
	  <>
		  <div className="">
			  <label htmlFor="" className="font-medium">Status</label>
			  <select defaultValue="0"className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
			  <option value="0">Short Term</option>
			  <option value="1">Medium Term</option>
			  <option value="2">Long Term</option>
			  </select>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Budget Status</label>
			  <select defaultValue="0"className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
			  <option value="0">Short Term</option>
			  <option value="1">Medium Term</option>
			  <option value="2">Long Term</option>
			  </select>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Economic Code</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="col-span-full">
			  <label htmlFor="" className="font-medium">Approved Budget</label>
			  <input required type="text" placeholder="The project is..." className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Releases</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Variance</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="col-span-full">
			  <label htmlFor="" className="font-medium">Budget from other sources</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
	  </>
	)
}

function LastForm(props) {
	return (
	  <>
		  <div className="">
			  <label htmlFor="" className="font-medium">Budget from other sources</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">Partner funding</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="">
			  <label htmlFor="" className="font-medium">% of Completion</label>
			  <input required type="number" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
		  <div className="col-span-full">
			  <label htmlFor="" className="font-medium">Comment</label>
			  <textarea required rows={8} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
		  </div>
	  </>
	)
}