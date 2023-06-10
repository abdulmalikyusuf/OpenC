import React from 'react'

import { PieChartWidget, ProjectWidget, LineChartWidget, AreaChartWidget } from "../components/Widgets";
import { monitoredProjects, themanticSectors } from "../data/charts";

function AccountabilityChart() {
    const [chartType, setChartType] = React.useState("line")
  return (
    <div className="p-2 bg-white rounded-lg dark:bg-gray-700 md:p-4 md:rounded-xl">
        <form>
            <div>
                <label htmlFor="" className="mr-4 font-medium">Select Chart Type</label>
                <select value={chartType} onChange={evt => setChartType(evt.target.value)} className="text-sm rounded-lg w-fit placeholder:font-medium placeholder:text-sm">
                    <option value="line">Line</option>
                    <option value="bar">Bar</option>
                    <option value="area">Area</option>
                    <option value="pie">Doughnut</option>
                </select>
            </div>
        </form>
            {/* {chartType === "bar" && <ProjectWidget title="Project Statistics" value="10,567" percentage={10.57} data={monitoredProjects} heading={false}/>}
            {chartType === "line" && <LineChartWidget title="Completed Project across LGAs" {...lgaProjects} />}
            {chartType === "area" && <AreaChartWidget title="Completed Project across LGAs" {...lgaProjects} />} */}
            {chartType === "pie" && 
            <div className="">
                <PieChartWidget title="Projects by Themantic Pillars" {...themanticSectors} />
            </div>}
    </div>
  )
}

export default AccountabilityChart