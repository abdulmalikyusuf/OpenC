import React from 'react'
import { CurrencyPoundIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import moment from "moment-timezone";
import Datetime from "react-datetime";
import {
	useFloating,
	useInteractions,
	useClick,
	useDismiss,
	offset,
	flip,
	shift
} from "@floating-ui/react-dom-interactions"
import "react-datetime/css/react-datetime.css";

import { ProjectsTable } from '../components/Tables'
import { josLGA, edoLGA, ekitiLGA } from '../data/demography';
import { currencyFormatter } from "../utilities/currencyFormatter"


function PProjects() {
	const [startDate, setStartDate] = React.useState("")
	const [endDate, setEndDate] = React.useState("")
    const [state, setState] = React.useState()
    const lgas = state === "0" ?  josLGA : state==="1" ? edoLGA : ekitiLGA;

    return (
        <main className="container px-4 mx-auto space-y-20 md:px-0">
            <section className="grid grid-flow-col gap-8 mt-20 md:grid-cols-2">
                <div className="px-8 py-4 border">
                    <h6 className="mb-4 h6">Find Projects</h6>
                    <div className="max-w-[25rem]">
                        <label htmlFor="" className="font-medium">MDA</label>
                        <select value={state} onChange={(e) => setState(e.target.value)} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                        <option value="">Select State</option>
                        <option value="0">Ministry of Finance</option>
                        <option value="1">Ministry of Education</option>
                        <option value="2">Ministry of Health</option>
                        </select>
                    </div>
                    <div className="max-w-[25rem] mt-4">
                        <label htmlFor="" className="font-medium">Sector</label>
                        <select defaultValue="0"className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                        <option value="">Select Sector</option>
                        <option value="0">Education</option>
                        <option value="1">Health</option>
                        <option value="2">Infrastructure</option>
                        <option value="2">Agriculture</option>
                        </select>
                    </div>
                    <div className="max-w-[25rem] mt-4">
                        <label htmlFor="" className="font-medium">LGA</label>
                        <select defaultValue="0"className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                            <option value="">Select LGA</option>
                            {josLGA.map(lga => (
                                    <option value={lga}>{lga}</option>
                                ))}
                        </select>
                    </div>
                </div>
            </section>
            <section className="grid grid-flow-col md:grid-cols-3">
                <div className="grid gap-5 md:col-start-2 md:col-span-2 md:grid-cols-2">
                    {[{title:"Total number of contract awarded", 
                        currency: false},
                        {title:"Highest contract amount",
                        currency: true},
                        {title:"Lowest contract amount",
                        currency: true},
                        {title:"Total amount of contracts",
                        currency: true}
                    ].map(card=> (
                        <div className="rounded-lg bg-primary/60 dark:bg-gray-900 ">
                            <div className={`flex flex-wrap ${card.currency ? "justify-between": "justify-end"} px-6 py-12 text-white dark:text-white`}>
                                {card.currency &&<CurrencyPoundIcon className="h-10"/>}
                                <h4 className="h3">
                                    {card.currency &&<span className="mr-4 line-through decoration-double">N</span>}
                                    {currencyFormatter(10000000)}</h4>
                            </div>
                            <p className="px-4 py-2 font-medium text-white rounded-b-lg bg-black/60 dark:text-white opacity-80">
                                {card.title}
                            </p>
                        </div>
                        ))
                    }
                </div>
            </section>
            <section className="space-y-8">
                <div className="grid grid-cols-1 gap-y-4 md:gap-x-8 md:grid-cols-2 lg:grid-cols-12">
                    <div className="col-span-full md:col-span-1 lg:col-span-3">
                        <Datetime timeFormat={false} onChange={setStartDate} renderInput={(props, openCalendar) => (
                            <div className="flex items-center w-full px-2 border-2 rounded-lg">
                                <input required type="text" value={startDate ? moment(startDate).format("MM/DD/YYYY") : ""}
                                    placeholder="mm/dd/yyyy" onFocus={openCalendar} onChange={() => { }} className="text-sm border-0 outline-none focus:ring-0 placeholder:font-medium placeholder:text-sm"/>
                                <CalendarDaysIcon className="w-4 h-4"/>
                            </div>
                        )}/>
                    </div>
                    <select defaultValue="0"className="w-full text-sm border-2 border-gray-300 rounded-lg col-span-full md:col-span-1 lg:col-span-2 dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm">
                        <option value="0">Sector</option>
                        <option value="1">LGA</option>
                        <option value="2">MDA</option>
					</select>
                    <div className="flex flex-col space-y-2 text-gray-900 lg:space-y-0 lg:flex-row col-span-full md:col-span-1 lg:col-span-6">
                        <input required type="text" placeholder="Construction of..." className="w-full text-sm border-2 border-gray-300 rounded-lg dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm"/>
                        <button className="flex items-center justify-center px-4 py-2 space-x-2 font-medium text-gray-300 bg-gray-100 rounded-lg lg:ml-4 hover:text-gray-100 hover:bg-gray-300">
                            <MagnifyingGlassIcon onClick={()=>{}} className="w-4 h-4"/>
                            <span>Search</span>
                        </button>
                    </div>
                    <Download/>
                </div>
                
                <ProjectsTable/>
            </section>

            
        </main>
    )
}

export default PProjects



function Download() {
	const [open, setOpen] = React.useState(false);
	const {x, y, reference, floating, strategy, context} = useFloating({
		open,
		onOpenChange: setOpen,
		middleware: [offset(12), flip(), shift({padding: 10})],
		placement: "bottom-start"
	});
	const {getReferenceProps, getFloatingProps} = useInteractions([
		useClick(context, {
			enabled: true,
			event: 'mousedown'
		}),
		useDismiss(context, {
			enabled: true,
			referencePress: true,
			ancestorScroll: true
		})
	])
	return (
		<div className="">
            <button className="p-2 font-bold text-white bg-red-600 rounded-md">
			    <ArrowDownTrayIcon className="w-4 cursor-pointer" ref={reference} {...getReferenceProps()}/>
            </button>
			{open && 
			<div ref={floating} {...getFloatingProps} className={`${strategy} bg-white w-fit whitespace-nowrap rounded-lg font-medium text-gray-500`}
			style={{
				left: x ?? 0,
				top: y ?? 0,
			}}>
				<button type="button" className="flex items-center w-full p-2 px-4 space-x-2 hover:bg-gray-200 hover:text-primary">
					<span>Download PDF</span>
				</button>
				<button type="button" className="flex items-center w-full p-2 px-4 space-x-2 hover:bg-gray-200 hover:text-primary">
					<span>Download CSV</span>
				</button>
				<button type="button" className="flex items-center w-full p-2 px-4 space-x-2 hover:bg-gray-200 hover:text-primary">
					<span>Download XLSX</span>
				</button>
			</div>
			}
		</div>
	)
}