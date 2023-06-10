import React from 'react'
import { CurrencyPoundIcon } from '@heroicons/react/24/outline'

import { ProjectsContext } from '../_contexts/ProjectsContext'
import { parseProjectParameterContractSum } from '../utilities/parseProjectData'
import { currencyFormatter } from "../utilities/currencyFormatter"


function VisualizationForm({ optionsHandler }) {
    const { mdas, contractors, projects } = React.useContext(ProjectsContext)
    const [criteria, setCriteria] = React.useState("year")
    const [chartType, setChartType] = React.useState("bar")
    const [filterParameter, setFilterParameter] = React.useState()
    const [options, setOptions] = React.useState()
    const [subTotalContractSum, setSubTotalContractSum] = React.useState(0)

    const arr = [
        {title: "Ministry, Department or Agency", value: "mda"},
        {title: "Contractor", value: "contractor"},
        {title: "Year", value: "year"}
    ]

    React.useEffect(()=> {
        optionsHandler({ criteria, chartType })
    }, [criteria, chartType])

    React.useEffect(()=> {
        switch (filterParameter) {
            case "mda":
                setOptions(mdas)
                break;
            case "contractor":
                setOptions(contractors)
                break;
            case "year":
                let years = []
                projects.map(project => {
                    if (years.includes(project["year"])) return
                    years = [...years, project["year"]]
                })
                setOptions(years.sort().map(year => {
                    return { value: year, id: year, name: year}
                }))
                break;
            default:
                break;
        }
    }, [filterParameter])
    
    
    const handleFilter = (event) => {
        setSubTotalContractSum(parseProjectParameterContractSum(filterParameter, event.target.value, projects))
    }
    
    return (
        <section className="mt-10">
            <div className="grid grid-cols-12 gap-10">
                <div className="border col-span-full lg:col-span-7">
                    <div className="flex p-5 space-x-10 font-bold lg:text-center">
                        <div className="">
                            <label htmlFor="" className="font-medium">MDA</label>
                            <select value={filterParameter} onChange={(e)=>setFilterParameter(e.target.value)} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                            <option value={""}>Select MDA</option>
                                {arr.map(ar => (
                                <option key={ar.value} value={ar.value}>{ar.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="" className="font-medium">State</label>
                            <select value={filterParameter} onChange={handleFilter} disabled={!options} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                            <option value={""}>{mdas ? "Select Option": "Select a criteria first.."}</option>
                                    {options?.map(option => (
                                    <option key={option.id} value={option.name}>{option.name}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="rounded-lg col-span-full lg:col-span-5 bg-primary/60 dark:bg-gray-900 ">
                        <div className="flex flex-wrap justify-between px-6 py-12 text-white dark:text-white">
                            <CurrencyPoundIcon className="h-10"/>
                            <h4 className="h3"><span className="mr-4 line-through decoration-double">N</span>{currencyFormatter(10000000)}</h4>
                        </div>
                        <p className="px-4 py-2 font-medium text-white rounded-b-lg bg-black/60 dark:text-white opacity-80">Total contract sum</p>
                    </div>
            </div>
            <div className="flex justify-between p-5 mx-auto font-bold lg:text-center md:w-1/2">
                <div className="max-w-[25rem]">
                    <label htmlFor="" className="font-medium">Criteria</label>
                    <select value={criteria} onChange={(event)=> setCriteria(event.target.value)} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                        <option value="year">Year</option>
                        <option value="mda">MDA</option>
                    </select>
                </div>
                <div className="max-w-[25rem]">
                    <label htmlFor="" className="font-medium">Chart Type</label>
                    <select value={chartType} onChange={(event)=> setChartType(event.target.value)} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                        <option value="bar">Bar</option>
                        <option value="line">Line</option>
                        <option value="area">Area</option>
                        <option value="pie">Pie</option>
                    </select>
                </div>
            </div>
        </section>
    )
}

export default VisualizationForm