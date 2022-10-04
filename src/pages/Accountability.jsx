import React from 'react'
import { CurrencyPoundIcon } from '@heroicons/react/24/outline'

import { ProjectsTable } from "../components/Tables";
import { states, josLGA, edoLGA, ekitiLGA } from '../data/demography';
import { currencyFormatter } from "../utilities/currencyFormatter"
import AccountabilityChart from '../components/AccountabilityChart';


function Accountability() {
    const [criteria, setCriteria] = React.useState()
    const [demography, setDemography] = React.useState()
    const [demographies, setDemographies] = React.useState()
    const [sTICode, setSTICode] = React.useState()



    React.useEffect(() => {
        switch (criteria) {
            case "Sector":
                setDemographies(["Education", "Health", "Agriculture", "Infrastructure"])
                break;
            case "State":
                setDemographies(states)
                break;
            default:
                break;
        }
    }, [criteria])

    const lgas = criteria === "State" ? demography==="Jos" ? josLGA : demography==="Ekiti" ? ekitiLGA : edoLGA: null;

    return (
        <div className="pb-10 mt-4 space-y-5 lg:space-y-10">
            <h2 className="text-center h2">Accountability</h2>
            <div className="grid items-start gap-4 md:grid-cols-3 xl:gap-10">
                <form className="flex flex-col space-y-2">
                    <div className="w-full">
                        <label htmlFor="" className="font-medium">Criteria</label>
                        <select value={criteria} onChange={e=> setCriteria(e.target.value)} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                            <option value={""}>Select Criteria</option>
                            <option value="State">State</option>
                            <option value="Sector">Sector</option>
                        </select>
                    </div>
                    {criteria &&
                    <div className="w-full">
                        <label htmlFor="" className="font-medium">{criteria}</label>
                        <select value={demography} onChange={e=> setDemography(e.target.value)} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                        <option value={""}>Select Option</option>
                            {demographies?.map(demography => (
                                <option value={demography}>{demography}</option>
                            ))}
                        </select>
                    </div>}
                    {lgas &&
                    <div className="w-full">
                        <label htmlFor="" className="font-medium">LGA</label>
                        <select value={sTICode} onChange={e=> setSTICode(e.target.value)} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                        <option value={""}>Select LGA</option>
                            {lgas.map(lga => (
                                <option key={lga} value={lga}>{lga}</option>
                            ))}
                        </select>
                    </div>}
                </form>
                {demography && 
                    <div className="grid gap-5 md:col-span-2 md:grid-cols-2">
                        {["Number of projects", "Highest project amount", "Lowest project amount", "Total amount of projects"].map(label=> (
                            <div className="rounded-lg bg-primary dark:bg-gray-900 ">
                                <div className="flex flex-wrap justify-between p-5 text-white dark:text-white">
                                    <CurrencyPoundIcon className="h-10"/>
                                    <h4 className="h4"><span className="mr-4 line-through decoration-double">N</span>{currencyFormatter(10000000)}</h4>
                                </div>
                                <p className="px-4 py-2 font-medium text-white bg-black rounded-b-lg dark:text-white opacity-80">{label}</p>
                            </div>
                            ))
                        }
                    </div>
                }
            </div>
            {demography && 
                <>
                    <AccountabilityChart/>
                    <div>
                        <h4 className="h4">Projects under {demography}</h4>
                        <ProjectsTable/>
                    </div>
                </>
            }
        </div>
    )
}

export default Accountability