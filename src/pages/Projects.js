import React from "react";
import { HomeIcon, ChevronRightIcon, BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

import DropdownMenu from "../components/DropdownMenu"
import { ProjectsTable } from "../components/Tables";
import Modal from "../components/Modal"
import ProjectForm from "../components/ProjectForm";
import DeleteProject from "../components/DeleteProject";
import ActivityForm from "../components/ActivityForm";

export default function Projects() {
	const [showProjectModal, setShowProjectModal] = React.useState(false);
	const [showActivityModal, setActivityModal] = React.useState(false);
	const [showDeleteModal, setShowDeleteModal] = React.useState(false);

	const menu = [
		{ title: "Project", icon: <BuildingOfficeIcon className="w-5 h-5 mr-2"/>,  handleClick: ()=>setShowProjectModal(prev => !prev) },
		{ title: "Activity", icon: <UserIcon className="w-5 h-5 mr-2"/>,  handleClick: ()=>setActivityModal(prev => !prev) }
	]

	return (
		<div className="mt-4 space-y-5 lg:space-y-10">
			<div className="space-y-2 lg:space-y-4">
				<nav className="flex mb-5" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-2">
						<li className="inline-flex items-center">
							<Link to="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-900">
								<HomeIcon className="w-5 h-5 mr-2.5"/>Home
							</Link>
						</li>
						<li>
							<div className="flex items-center">
								<ChevronRightIcon className="w-6 h-6 text-gray-400"/>
								<Link to="/projects" className="ml-1 text-sm font-medium text-black hover:text-gray-900 md:ml-2">
									Contract
								</Link>
							</div>
						</li>
						{/* <li>
							<div className="flex items-center">
								<ChevronRightIcon className="w-6 h-6 text-gray-400"/>
								<Link to={`/projects`}
									className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2">
									Project 1
								</Link>
							</div>
						</li> */}
					</ol>
				</nav>
				<h4 className="h4">Contracts</h4>
				<div className="flex justify-between space-x-8">
					<form className="">
						<label htmlFor="projects-search" className="sr-only">
							Search
						</label>
						<div className="flex pl-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
							<MagnifyingGlassIcon onClick={()=>{}} className="w-5 h-5 my-auto"/>
							<input type="text" name="project" id="project-search" className="mr-2 border-0 outline-none bg-gray-50 focus:ring-0 lg:w-80" placeholder="Search for contract"/>
						</div>
					</form>
					<DropdownMenu label="New" options={menu}/>
				</div>
			</div>
		<ProjectsTable toggleProjectModal={setShowProjectModal} deleteProjectModal={setShowDeleteModal}/>


		{showProjectModal && <Modal onHide={() => setShowProjectModal(false)} render={() => (<ProjectForm onClose={()=>setShowProjectModal(false)}/> )}/>}
		{showActivityModal && <Modal onHide={() => setActivityModal(false)} render={() => (<ActivityForm onClose={()=>setShowProjectModal(false)}/> )}/>}
		{showDeleteModal && <Modal onHide={() => setShowDeleteModal(false)} render={() => (<DeleteProject /> )}/>}
		</div>
	);
};
