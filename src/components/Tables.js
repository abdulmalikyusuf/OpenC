import React, { useContext } from "react";
import { useNavigate, } from "react-router-dom";
import { EllipsisHorizontalIcon, EyeSlashIcon, FlagIcon } from '@heroicons/react/24/outline'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import {
	useFloating,
	useInteractions,
	useClick,
	useDismiss,
	offset,
	flip,
	shift
} from "@floating-ui/react-dom-interactions"

import { NavigationRoutes } from "../data/routes";
import { ProjectsContext } from "../_contexts/ProjectsContext";
import { currencyFormat } from "../utilities/parseProjectData";



export const ProjectsTable = ({ toggleProjectModal, deleteProjectModal }) => {
	const {projects} = useContext(ProjectsContext)
	const navigate = useNavigate()
	const totalProjects = projects.length;
	const menu = [
		{ title: "View", icon: <EyeIcon className="w-5 h-5 mr-2"/>,  handleClick: ()=>toggleProjectModal(prev => !prev) },
		{ title: "Update", icon: <PencilSquareIcon className="w-5 h-5 mr-2"/>,  handleClick: ()=>deleteProjectModal(prev => !prev) },
		{ title: "Delete", icon: <TrashIcon className="w-5 h-5 mr-2"/>,  handleClick: ()=>deleteProjectModal(prev => !prev) }
	]

  const TableRow = (props) => {
    const { title, budgetAmount, contractAmount, contractor, lga, mda, index } = props;

    return (
      	<tr className="">
			<td className="px-2 text-sm font-normal text-gray-500 md:p-2 lg:p-4 whitespace-wrap">
				<Link to={NavigationRoutes.Projects.path} className="font-medium">
					{index+1}
				</Link>
			</td>
			<td className="px-2 text-base font-medium text-gray-900 md:p-2 lg:p-4 whitespace-wrap">
				{title}
			</td>
			<td className="px-2 text-base font-medium text-gray-900 md:p-2 lg:p-4 whitespace-wrap">
				{currencyFormat(budgetAmount)}
			</td>
			<td className="px-2 text-base font-medium text-gray-900 md:p-2 lg:p-4 whitespace-wrap">
				{currencyFormat(contractAmount)}
			</td>
			<td className="px-2 text-base font-medium text-gray-900 md:p-2 lg:p-4 whitespace-wrap">
				{contractor}
			</td>
			<td className="px-2 space-x-2 md:p-2 lg:p-4 whitespace-wrap">{lga}</td>
			<td className="px-2 space-x-2 md:p-2 lg:p-4 whitespace-wrap">{mda}</td>
			<td className="px-2 space-x-2 md:p-2 lg:p-4 whitespace-wrap">
				{/* <EllipsisHorizontalIcon className="w-8"/> */}
				<Dropdown/>
			</td>
				{/* <Menu label={<EllipsisHorizontalIcon className="w-8"/>}>
					<MenuItem label="Undo" />
					<MenuItem label="Redo" />
					<MenuItem label="Cut" disabled />
				</Menu> */}
		</tr>
    );
  };

  return (
	<div className="-z-10">
        <div className="flex flex-col">
			<div className="overflow-x-auto">
				<div className="inline-block min-w-full align-middle">
					<div className="overflow-hidden shadow">
						<table className="min-w-full divide-y divide-gray-200 table-fixed ">
							<thead className="bg-gray-100 ">
								<tr>
									<th scope="col" className="p-4">#</th>
									<th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
									Contract Title
									</th>
									<th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
									Budgeted Amount
									</th>
									<th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
									Contract Amount
									</th>
									<th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
									Contractor
									</th>
									<th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
									LGA
									</th>
									<th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
									MDA
									</th>
									<th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
									Action
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 ">
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


function Dropdown() {
	const [open, setOpen] = React.useState(false);
	const {x, y, reference, floating, strategy, context} = useFloating({
		open,
		onOpenChange: setOpen,
		middleware: [offset(4), flip(), shift({padding: 10})],
		placement: "bottom"
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
			<EllipsisHorizontalIcon className="w-8 cursor-pointer" ref={reference} {...getReferenceProps()}/>
			{open && 
			<div ref={floating} {...getFloatingProps} className={`${strategy} bg-white py-1 w-fit whitespace-nowrap rounded-lg font-medium text-gray-500 border border-gray-500`}
			style={{
				left: x ?? 0,
				top: y ?? 0,
			}}>
				<button type="button" className="flex items-center w-full p-2 px-4 space-x-2 hover:bg-gray-200 hover:text-primary">
					<span><EyeIcon className="w-5 h-5"/></span>
					<span>View Details</span>
				</button>
				<button type="button" className="flex items-center w-full p-2 px-4 space-x-2 text-red-500 hover:bg-gray-200">
					<span><FlagIcon className="w-5 h-5 fill-red-500"/></span>
					<span>Raise Red Flag</span>
				</button>
			</div>
			}
		</div>
	)
}