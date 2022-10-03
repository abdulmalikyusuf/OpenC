import React from 'react';
import { FaFemale, FaMale } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { IoPeopleSharp } from "react-icons/io5"
import { PieChartWidget, ProjectWidget, LineChartWidget } from "../components/Widgets";
import { themanticSectors } from "../data/charts";
import { lgaProjects, projectData } from "../data/projects";


function Report() {
    const cards = [
        {count: 365, label: "International Staffs", icon: IoIosPeople},
        {count: 10577, label: "National & Local Staffs", icon: IoPeopleSharp},
        {count: 219, label: "Male Staffs", icon:FaMale},
        {count: 52, label: "Female Staffs", icon:FaFemale},
    ]
	return (
		<div className="pb-8 mt-4 space-y-5 lg:space-y-10">
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-4">
                {cards.map(card => (
                    <div className="flex items-center px-2 py-4 space-x-2 text-white bg-primary dark:bg-gray-700 dark:text-white rounded-xl">
                        <card.icon size={50} className=''/>
                        <div className="">
                            <h1 className="h2">{card.count}</h1>
                            <h5 className="h5">{card.label}</h5>
                        </div>
                    </div>
                ))}
				{/* <div className="px-2 pt-4 space-y-10 text-black bg-white dark:bg-gray-700 rounded-xl">
                    <div className="flex justify-between">
                        <FaUser size={40} className=''/>
                        <h3 className="h3">365</h3>
                    </div>
                    <div className="p-2 -mx-2 font-medium text-white opacity-50 bg-primary dark:bg-gray-900 rounded-b-xl dark:text-white">International Staffs</div>
                </div>   */}
			</div>
            <div className="p-5 bg-white dark:bg-gray-700">
                <LineChartWidget title="Completed Project across LGAs" {...lgaProjects} />
			</div>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-10">
                <div className="p-2 bg-white shadow-sm dark:bg-gray-700 md:p-4 rounded-xl">
                    <h5 className="text-center h5">Total projects in each LGA</h5>
                    <hr/>
				    <ProjectWidget title="Projects across LGAs" heading={false} subtitle={"10,578 Projects across 27 LGAs"} chartData={projectData}/>
                </div>
                <div className="p-2 bg-white shadow-sm dark:bg-gray-700 md:p-4 rounded-xl">
                    <PieChartWidget title="Projects by Themantic Pillars" {...themanticSectors} />
                </div>
            </div>
		</div>
	)
}

export default Report