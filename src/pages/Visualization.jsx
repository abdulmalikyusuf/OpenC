import React from 'react'

import VisualizationForm from '../components/VisualizationForm'
import { BarChartWidget, LineChartWidget, ProjectWidget, PieChartWidget, AreaChartWidget } from '../components/Widgets'
import { extractMDAData, extractYearData } from '../utilities/parseProjectData'
import { pillarProjects } from "../data/SDPPillars";
import { ProjectsContext } from '../_contexts/ProjectsContext';


function Visualization() {
    const { projects } = React.useContext(ProjectsContext)
    const [options, setOptions] = React.useState()
    const [totalProjects, setTotalProjects] = React.useState()
    const [contractSum, setContractSum] = React.useState()
    const totalProjectsTitle = "Number of projects by"
    const contractSumTitle = "Contract sum of projects by"
    
    React.useEffect(()=> {
        const {yearTotalProjects, yearContractSum} = extractYearData(projects)
        setTotalProjects(yearTotalProjects)
        setContractSum(yearContractSum)
    }, [projects])
    
    const filterHandler = (options) => {
        switch (options?.criteria) {
            case "year":
                const {yearTotalProjects, yearContractSum} = extractYearData(projects)
                setTotalProjects(yearTotalProjects)
                setContractSum(yearContractSum)
                setOptions(options)
                break;
            case "mda":
                const {mdaTotalProjects, mdaContractSum} = extractMDAData(projects)
                setTotalProjects(mdaTotalProjects)
                setContractSum(mdaContractSum)
                setOptions(options)
                break;
            default:
                break;
        }
    }
    return (
        <main className="container mx-auto">
            <VisualizationForm optionsHandler={filterHandler}/>
            <section className="grid grid-cols-2 gap-10">
                {/* <div className="">
                    {options?.chartType === "bar" ? <BarChartWidget title={`${totalProjectsTitle} ${options.criteria.toUpperCase()}`}
                    {...totalProjects}/>: null}
                    {options?.chartType === "line" ? <LineChartWidget title={`${totalProjectsTitle} ${options.criteria.toUpperCase()}`}
                    {...totalProjects}/>: null}
                    {options?.chartType === "area" ? <AreaChartWidget title={`${totalProjectsTitle} ${options.criteria.toUpperCase()}`}
                    {...totalProjects}/>: null}
                    {options?.chartType === "pie" ? <PieChartWidget title={`${totalProjectsTitle} ${options.criteria.toUpperCase()}`}
                    {...totalProjects}/>: null}
                </div>
                <div>
                    {options?.chartType === "bar" ? <BarChartWidget title={`${contractSumTitle} ${options.criteria.toUpperCase()}`}
                    {...contractSum}/>: null}
                    {options?.chartType === "line" ? <LineChartWidget title={`${contractSumTitle} ${options.criteria.toUpperCase()}`}
                    {...contractSum}/>: null}
                    {options?.chartType === "area" ? <AreaChartWidget title={`${contractSumTitle} ${options.criteria.toUpperCase()}`}
                    {...contractSum}/>: null}
                    {options?.chartType === "pie" ? <PieChartWidget title={`${contractSumTitle} ${options.criteria.toUpperCase()}`}
                    {...contractSum}/>: null}
                </div> */}
                <div className="p-5 bg-white dark:bg-gray-700">
                    <ProjectWidget title="Contract Performance Indicator" subtitle={"10,578 Projects across 3 States"} chartData={pillarProjects}/>
                </div>
                <div className="p-5 bg-white dark:bg-gray-700">
                    <ProjectWidget title="Contract Performance Indicator" subtitle={"10,578 Projects across 3 States"} chartData={pillarProjects}/>
                </div>
            </section>
        </main>
    )
}

export default Visualization