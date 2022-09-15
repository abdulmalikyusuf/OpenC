
import React from "react";
import { useNavigate, } from "react-router-dom";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

import { NavigationRoutes } from "../data/routes";
import { projects } from "../data/projects";


export const ProjectsTable = ({ toggleProjectModal, deleteProjectModal }) => {
  const navigate = useNavigate()
  const totalProjects = projects.length;

  const TableRow = (props) => {
    const { index, basisOfProject, projectName, themanticSector, sdpPillar, stiCode } = props;

    return (
      	<tr className="">
			<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
				<Link to={NavigationRoutes.Projects.path} className="font-medium">
					{index+1}
				</Link>
			</td>
			<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
				{basisOfProject}
			</td>
			<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
				{projectName}
			</td>
			<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
				{themanticSector}
			</td>
			<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
				{sdpPillar}
			</td>
			<td className="p-4 whitespace-nowrap space-x-2">{stiCode}</td>
			<td className="p-4 whitespace-nowrap space-x-2"><EllipsisHorizontalIcon className="w-8"/></td>
		</tr>
    );
  };

  return (
	<div>
        <div className="flex flex-col">
			<div className="overflow-x-auto">
				<div className="align-middle inline-block min-w-full">
					<div className="shadow overflow-hidden">
						<table className="table-fixed min-w-full divide-y divide-gray-200 dark:divide-gray-500">
							<thead className="bg-gray-100 dark:bg-gray-800">
								<tr>
									<th scope="col" className="p-4">#</th>
									<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
									Basis of Project
									</th>
									<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
									Project Name
									</th>
									<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
									Themantic Sector
									</th>
									<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
									SDP Pillar
									</th>
									<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
									STI Code
									</th>
									<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
									Action
									</th>
								</tr>
							</thead>
							<tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-500">
								{projects.map((project, idx) => <TableRow index={idx} {...project}/>)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
        </div>
        <div className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
			<nav></nav>
			<small className="fw-bold">
				Showing <b>{totalProjects}</b> out of <b>{totalProjects}</b> entries
			</small>
        </div>
    </div>
  );
};