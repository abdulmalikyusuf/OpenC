import React from "react";
import { BuildingOfficeIcon, UserIcon } from '@heroicons/react/20/solid'

import DropdownMenu from "../components/DropdownMenu"
import { CardWidget, PieChartWidget, ProjectWidget, LineChartWidget } from "../components/Widgets";
import UserForm from "../components/UserForm";
import Modal from "../components/Modal"
import ProjectForm from "../components/ProjectForm";
import { themanticPillarProjects, themanticSectors } from "../data/charts";
import { lgaProjects, projectData } from "../data/projects";
import { pillarProjects } from "../data/SDPPillars";


export default function DashboardOverview() {
  const [showProjectModal, setProjectModal] = React.useState(false);
  const [showUserModal, setUserModal] = React.useState(false);

  const menu = [
	{ title: "State", icon: <BuildingOfficeIcon className="w-5 h-5 mr-2"/>, handleClick: ()=>setProjectModal(prev => !prev)  },
	{ title: "Sector", icon: <UserIcon className="w-5 h-5 mr-2"/>, handleClick: ()=>setUserModal(prev => !prev)  },
  ]
  
  return (
    <div className="flex flex-col pb-10 mt-5 space-y-5 lg:space-y-10">
      	<div className="space-y-4">
		    <DropdownMenu label="Filter" options={menu} placement="left"/>
			<div className="p-5 bg-white dark:bg-gray-700">
				<ProjectWidget title="Contract Performance Indicator" subtitle={"10,578 Projects across 3 States"} chartData={pillarProjects}/>
			</div>
      	</div>

		<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:gap-5">
			{themanticPillarProjects.map(pillar =>
				<CardWidget key={pillar.code} title={`${pillar.label}`} value={pillar.value}
					icon={<pillar.icon className="w-8 h-8 md:h-10 md:w-10"/>}/>
			)}
		</div>	

		{/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-10">
			<div className="p-2 bg-white rounded-lg col-span-full lg:col-span-1 dark:bg-gray-700 md:p-4 md:rounded-xl">
				<LineChartWidget title="Completed Project across LGAs" {...lgaProjects} />
			</div>
			<div className="p-2 bg-white rounded-lg col-span-full lg:col-span-1 dark:bg-gray-700 md:p-4 md:rounded-xl">
				<PieChartWidget title="Projects by Themantic Pillars" {...themanticSectors} />
			</div>
		</div> */}
		{/* <div className="p-5 bg-white dark:bg-gray-700">
			<ProjectWidget title="Projects across LGAs" heading={false} subtitle={"10,578 Projects across 27 LGAs"} chartData={projectData}/>
		</div> */}
      {showProjectModal && <Modal heading="Create new Project" onHide={() => setProjectModal(false)} render={() => (<ProjectForm /> )}/>}
      {showUserModal && <Modal heading="Create User" onHide={() => setUserModal(false)} render={() => (<UserForm /> )}/>}
    </div>
  );
};