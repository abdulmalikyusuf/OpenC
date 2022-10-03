import React from 'react'

import { PieChartWidget, ProjectWidget, LineChartWidget, AreaChartWidget } from "../components/Widgets";
import { monitoredProjects, themanticSectors } from "../data/charts";
import { lgaProjects } from '../data/projects';

function AccountabilityChart() {
    const [chartType, setChartType] = React.useState("line")
  return (
    <div className="bg-white dark:bg-gray-700 p-2 md:p-4 rounded-lg md:rounded-xl">
        <form>
            <div>
                <label htmlFor="" className="font-medium mr-4">Select Chart Type</label>
                <select value={chartType} onChange={evt => setChartType(evt.target.value)} className="w-fit rounded-lg placeholder:font-medium text-sm placeholder:text-sm">
                    <option value="line">Line</option>
                    <option value="bar">Bar</option>
                    <option value="area">Area</option>
                    <option value="pie">Doughnut</option>
                </select>
            </div>
        </form>
            {chartType === "bar" && <ProjectWidget title="Project Statistics" value="10,567" percentage={10.57} data={monitoredProjects} heading={false}/>}
            {chartType === "line" && <LineChartWidget title="Completed Project across LGAs" {...lgaProjects} />}
            {chartType === "area" && <AreaChartWidget title="Completed Project across LGAs" {...lgaProjects} />}
            {chartType === "pie" && 
            <div className="">
                <PieChartWidget title="Projects by Themantic Pillars" {...themanticSectors} />
            </div>}
    </div>
  )
}

export default AccountabilityChart