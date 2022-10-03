import React from 'react'
import { CurrencyPoundIcon } from '@heroicons/react/24/outline'

import { ProjectsTable } from "../components/Tables";
import { constituencies, senatorialDistrict } from '../data/demography';
import { currencyFormatter } from "../utilities/currencyFormatter"
import AccountabilityChart from '../components/AccountabilityChart';
import stiCodes from '../data/stiCodes';


function Accountability() {
    const [criteria, setCriteria] = React.useState()
    const [demography, setDemography] = React.useState()
    const [demographies, setDemographies] = React.useState()
    const [sTICode, setSTICode] = React.useState()



    React.useEffect(() => {
        switch (criteria) {
            case "mda":
                setDemographies(["Education", "Health"])
                break;
            case "senatorialDistrict":
                setDemographies(senatorialDistrict)
                break;
            case "federalConstituency":
                setDemographies(constituencies)
                break;
            default:
                break;
        }
    }, [criteria])

    return (
        <div className="space-y-5 lg:space-y-10 mt-4 pb-10">
            <h2 className="h2 text-center">Accountability</h2>
            <div className="grid md:grid-cols-3 gap-4 xl:gap-10 items-start">
                <form className="flex flex-col space-y-2">
                    <div className="w-full">
                        <label htmlFor="" className="font-medium">Criteria</label>
                        <select value={criteria} onChange={e=> setCriteria(e.target.value)} className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm">
                            <option value={""}>Select Criteria</option>
                            <option value="senatorialDistrict">Senatorial Districts</option>
                            <option value="federalConstituency">Federal Constituencies</option>
                            <option value="mda">MDA</option>
                        </select>
                    </div>
                    {criteria &&
                    <div className="w-full">
                        <label htmlFor="" className="font-medium">Option</label>
                        <select value={demography} onChange={e=> setDemography(e.target.value)} className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm">
                        <option value={""}>Select Option</option>
                            {demographies?.map(demography => (
                                <option value={demography}>{demography}</option>
                            ))}
                        </select>
                    </div>}
                    {demography &&
                    <div className="w-full">
                        <label htmlFor="" className="font-medium">STI Code</label>
                        <select value={sTICode} onChange={e=> setSTICode(e.target.value)} className="w-full rounded-lg placeholder:font-medium text-sm placeholder:text-sm">
                        <option value={""}>Select STI Code</option>
                            {stiCodes.map(sti => (
                                <option key={sti.code} value={sti.code}>{sti.title}</option>
                            ))}
                        </select>
                    </div>}
                </form>
                {sTICode && 
                    <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
                        {["Number of projects", "Highest project amount", "Lowest project amount", "Total amount of projects"].map(label=> (
                            <div className="bg-primary dark:bg-gray-900 rounded-lg ">
                                <div className="p-5 text-white dark:text-white text-white dark:text-white flex justify-between flex-wrap">
                                    <CurrencyPoundIcon className="h-10"/>
                                    <h4 className="h4"><span className="line-through decoration-double mr-4">N</span>{currencyFormatter(10000000)}</h4>
                                </div>
                                <p className="font-medium text-white dark:text-white text-white dark:text-white py-2 px-4 bg-black opacity-80 rounded-b-lg">{label}</p>
                            </div>
                            ))
                        }
                    </div>
                }
            </div>
            {sTICode && 
                <>
                    <AccountabilityChart/>
                    <div>
                        <h4 className="h4">Projects under {demography} in {sTICode}</h4>
                        <ProjectsTable/>
                    </div>
                </>
            }
        </div>
    )
}

export default Accountability