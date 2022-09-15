import React from "react";
import { HomeIcon, ChevronRightIcon, BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

import DropdownMenu from "../components/DropdownMenu"
import { ProjectsTable } from "../components/Tables";
import Modal from "../components/Modal"
import ProjectForm from "../components/ProjectForm";
import DeleteProject from "../components/DeleteProject";

export default function Projects() {
	const [showProjectModal, setShowProjectModal] = React.useState(false);
	const [showDeleteModal, setShowDeleteModal] = React.useState(false);

	const menu = [
		{ title: "Project", icon: <BuildingOfficeIcon className="mr-2 h-5 w-5"/>,  handleClick: ()=>setShowProjectModal(prev => !prev) },
		{ title: "Volunter", icon: <UserIcon className="mr-2 h-5 w-5"/>,  handleClick: ()=>setShowProjectModal(prev => !prev) }
	]

	return (
		<div className="mt-4 space-y-5 lg:space-y-10">
			<div className="space-y-2 lg:space-y-4">
				<nav className="flex mb-5" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-2">
						<li className="inline-flex items-center">
							<Link to="/" className="text-gray-400 text-sm font-medium hover:text-gray-900 inline-flex items-center">
								<HomeIcon className="w-5 h-5 mr-2.5"/>Home
							</Link>
						</li>
						<li>
							<div className="flex items-center">
								<ChevronRightIcon className="w-6 h-6 text-gray-400"/>
								<Link to="/projects" className="text-black hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">
									Project
								</Link>
							</div>
						</li>
						{/* <li>
							<div className="flex items-center">
								<ChevronRightIcon className="w-6 h-6 text-gray-400"/>
								<Link to={`/projects`}
									className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">
									Project 1
								</Link>
							</div>
						</li> */}
					</ol>
				</nav>
				<h4 className="h4">Projects</h4>
				<div className="flex justify-between space-x-8">
					<form className="">
						<label htmlFor="projects-search" className="sr-only">
							Search
						</label>
						<div className="flex bg-gray-50 border border-gray-300 text-gray-900 pl-3 rounded-lg">
							<MagnifyingGlassIcon onClick={()=>{}} className="h-5 w-5 my-auto"/>
							<input type="text" name="project" id="project-search" className="bg-gray-50 border-0 outline-none focus:ring-0 mr-2 w-72 lg:w-80" placeholder="Search for project"/>
						</div>
					</form>
					<DropdownMenu label="New" options={menu}/>
				</div>
			</div>
		<ProjectsTable toggleProjectModal={setShowProjectModal} deleteProjectModal={setShowDeleteModal}/>


		{showProjectModal && <Modal heading="Create new Project" onHide={() => setShowProjectModal(false)} render={() => (<ProjectForm /> )}/>}
		{showDeleteModal && <Modal onHide={() => setShowDeleteModal(false)} render={() => (<DeleteProject /> )}/>}
		</div>
	);
};
