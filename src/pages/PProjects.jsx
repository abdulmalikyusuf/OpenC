import React from 'react'
import { CurrencyPoundIcon } from '@heroicons/react/24/outline'

import { ProjectsTable } from '../components/Tables'
import { josLGA, edoLGA, ekitiLGA } from '../data/demography';
import { currencyFormatter } from "../utilities/currencyFormatter"


function PProjects() {
    const [state, setState] = React.useState()
    const lgas = state === "0" ?  josLGA : state==="1" ? edoLGA : ekitiLGA;
  return (
    <main className="container mx-auto">
        <section className="grid grid-cols-2 gap-8 mt-8">
            <div className="px-8 py-4 border">
                <h6 className="mb-4 h6">Find Projects</h6>
                <div className="max-w-[25rem]">
                    <label htmlFor="" className="font-medium">State</label>
                    <select value={state} onChange={(e) => setState(e.target.value)} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                    <option value="">Select State</option>
                    <option value="0">Plateau</option>
                    <option value="1">Edo</option>
                    <option value="2">Ekiti</option>
                    </select>
                </div>
                <div className="max-w-[25rem] mt-4">
                    <label htmlFor="" className="font-medium">Sector</label>
                    <select defaultValue="0"className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                    <option value="">Select Sector</option>
                    <option value="0">Education</option>
                    <option value="1">Health</option>
                    <option value="2">Infrastructure</option>
                    <option value="2">Agriculture</option>
                    </select>
                </div>
                {state && 
                <div className="max-w-[25rem] mt-4">
                    <label htmlFor="" className="font-medium">LGA</label>
                    <select defaultValue="0"className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                        <option value="">Select LGA</option>
                        {lgas && 
                            lgas.map(lga => (
                                <option value={lga}>{lga}</option>
                            ))
                        }
                    </select>
                </div>}
            </div>
        </section>
        <section className="grid grid-cols-3 mt-8">
            <div className="grid col-span-2 col-start-2 gap-5 md:grid-cols-2">
                {["Number of projects", "Highest project amount", "Lowest project amount", "Total amount of projects"].map(label=> (
                    <div className="rounded-lg bg-primary dark:bg-gray-900 ">
                        <div className="flex flex-wrap justify-between px-6 py-12 text-white dark:text-white">
                            <CurrencyPoundIcon className="h-10"/>
                            <h4 className="h3"><span className="mr-4 line-through decoration-double">N</span>{currencyFormatter(10000000)}</h4>
                        </div>
                        <p className="px-4 py-2 font-medium text-white bg-black rounded-b-lg dark:text-white opacity-80">{label}</p>
                    </div>
                    ))
                }
            </div>
        </section>
        <section className="mt-8">
            <ProjectsTable/>
        </section>

        
    </main>
  )
}

export default PProjects