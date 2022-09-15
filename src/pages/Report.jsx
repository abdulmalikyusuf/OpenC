import React from 'react';
import { FaFemale, FaMale, FaUser } from "react-icons/fa"
import { PieChartWidget, ProjectWidget, LineChartWidget } from "../components/Widgets";
import { monitoredProjects, themanticPillarProjects } from "../data/charts";


function Report() {
	return (
		<div className="mt-4 space-y-5 lg:space-y-10 pb-8">
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-4">
				<div className="bg-white px-2 pt-4 text-black rounded-xl space-y-10">
                    <div className="flex justify-between">
                        <FaUser size={40} className=''/>
                        <h3 className="h3">365</h3>
                    </div>
                    <div className="bg-primary opacity-50 -mx-2 p-2 rounded-b-xl text-white font-medium">International Staffs</div>
                </div>  
				<div className="bg-white px-2 pt-4 text-black rounded-xl space-y-10">
                    <div className="flex justify-between">
                        <FaUser size={40} className=''/>
                        <h3 className="h3">10577</h3>
                    </div>
                    <div className="bg-primary opacity-50 -mx-2 p-2 rounded-b-xl text-white font-medium">National & Local Staffs</div>
                </div>  
				<div className="bg-white px-2 pt-4 text-black rounded-xl space-y-10">
                    <div className="flex justify-between">
                        <FaMale size={40} className=''/>
                        <h3 className="h3">219</h3>
                    </div>
                    <div className="bg-primary opacity-50 -mx-2 p-2 rounded-b-xl text-white font-medium">Male Staffs</div>
                </div>  
				<div className="bg-white px-2 pt-4 text-black rounded-xl space-y-10">
                    <div className="flex justify-between">
                        <FaFemale size={40} className=''/>
                        <h3 className="h3">52</h3>
                    </div>
                    <div className="bg-primary opacity-50 -mx-2 p-2 rounded-b-xl text-white font-medium">Female Staffs</div>
                </div>  
			</div>
            <div className="bg-white p-5">
				<ProjectWidget title="Project Statistics" value="10,567" percentage={10.57} data={monitoredProjects}/>
			</div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10">
                <div className="bg-white p-4 shadow-sm rounded-xl">
                    <LineChartWidget title="Completed Project across LGAs" data={monitoredProjects} />
                </div>
                <div className="bg-white p-4 shadow-sm rounded-xl">
                    <PieChartWidget title="Projects by Themantic Pillars" data={themanticPillarProjects} />
                </div>
            </div>
		</div>
	)
}

export default Report