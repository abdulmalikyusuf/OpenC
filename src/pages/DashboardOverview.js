import React from "react";
import { BuildingOfficeIcon, UserIcon } from '@heroicons/react/20/solid'

import DropdownMenu from "../components/DropdownMenu"
import { CardWidget, PieChartWidget, ProjectWidget, LineChartWidget } from "../components/Widgets";
import UserForm from "../components/UserForm";
import Modal from "../components/Modal"
import ProjectForm from "../components/ProjectForm";
import { monitoredProjects, themanticPillarProjects } from "../data/charts";


export default function DashboardOverview() {
  const [showProjectModal, setProjectModal] = React.useState(false);
  const [showUserModal, setUserModal] = React.useState(false);

  const menu = [
	{ title: "Project", icon: <BuildingOfficeIcon className="mr-2 h-5 w-5"/>, handleClick: ()=>setProjectModal(prev => !prev)  },
	{ title: "Volunter", icon: <UserIcon className="mr-2 h-5 w-5"/>, handleClick: ()=>setUserModal(prev => !prev)  }
  ]
  
  return (
    <div className="flex flex-col space-y-5 lg:space-y-10 mt-5 pb-10">
      	<div className="space-y-4">
		    <DropdownMenu label="New" options={menu} placement="left"/>
			<div className="bg-white p-5">
				<ProjectWidget title="Project Statistics" value="10,567" percentage={10.57} data={monitoredProjects}/>
			</div>
      	</div>

		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-5">
			{themanticPillarProjects.map(pillar =>
				<CardWidget key={pillar.code} title={`${pillar.label}`} value={pillar.value}
					icon={<pillar.icon className="h-10 w-10 md:h-14 md:w-14"/>}/>
			)}
		</div>	

		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
			<div className="col-span-full lg:col-span-1 bg-white p-2 md:p-4 rounded-lg md:rounded-xl">
				<LineChartWidget title="Completed Project across LGAs" data={monitoredProjects} />
			</div>
			<div className="col-span-full lg:col-span-1 bg-white p-2 md:p-4 rounded-lg md:rounded-xl">
				<PieChartWidget title="Projects by Themantic Pillars" data={themanticPillarProjects} />
			</div>
		</div>
      {showProjectModal && <Modal heading="Create new Project" onHide={() => setProjectModal(false)} render={() => (<ProjectForm /> )}/>}
      {showUserModal && <Modal heading="Create User" onHide={() => setUserModal(false)} render={() => (<UserForm /> )}/>}
    </div>
  );
};