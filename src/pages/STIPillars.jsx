import React from "react";

import Accordion from "../components/IndicatorsAccordion";
import stiCodes from "../data/stiCodes";
import { strategicGoals } from "../data/strategicGoals";
import "./Scrollbar.css";


function STIPillars() {
    const [activeLabel, setActiveLabel] = React.useState(0)
	return (
		<div className="pb-10 mt-4 space-y-2 md:px-10">
			<h2 className="text-center h2">STI PIllars & Indicators</h2>
			{stiCodes.map((sti) => (
				<Accordion key={sti.code} {...sti}>
					{/* <div className="flex w-full mx-auto space-x-8 overflow-auto whitespace-nowrap scrollbar-hide">-mx-4 sm:-mx-6     */}
                    <div class="flex overflow-auto mb-6  space-x-8 whitespace-nowrap scrollbar-hide">
                        <div class="flex-none min-w-full px-4 sm:px-6">
                            <ul class="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5">
                                {sti.activities.map((activity, i) => (
                                    <li key={activity.code}>
                                        <h2>
                                            <button type="button" onClick={()=>setActiveLabel(i)} className={`${i === activeLabel &&"text-primary  border-current"} flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slte-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700`}>
                                                {activity.code}
                                            </button>
                                        </h2>
                                    </li>
                                    
                                ))}
                                
                            </ul>
                        </div>
                    </div>
					<div className="px-4 py-5 lg:px-6">
						<h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
							STI Code Information
						</h3>
						<p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500 dark:text-white">
							Indicator details and activities
						</p>
                        <div className="px-4 py-5 lg:p-0">
                            <dl className="border-b border-gray-200">
                                {Object.keys(sti).filter(key => key!=="activities").map((key, index) => (
                                    <div className="mt-8 lg:px-6 lg:py-2 lg:grid lg:grid-cols-3 lg:gap-3 first:border-t-0 lg:mt-0 lg:border-t lg:border-gray-200">
                                        <dt className="text-sm font-medium leading-5 text-gray-500 uppercase dark:text-white">{key}</dt>
                                        <dt className="mt-1 text-sm leading-5 text-gray-500 dark:text-white lg:mt-0 lg:col-span-2">{sti[key]}</dt>
                                    </div>
                                    )
                                )}
                                    <div className={`lg:px-6 lg:py-2 lg:grid lg:grid-cols-3 lg:gap-3 mt-8 lg:mt-0 lg:border-t lg:border-gray-200`}>
                                        <dt className="text-sm font-medium leading-5 text-gray-500 uppercase dark:text-white">Activity Code</dt>
                                        <dt className="mt-1 text-sm leading-5 text-gray-500 dark:text-white lg:mt-0 lg:col-span-2">HCD2-I1</dt>
                                    </div>
                                    <div className={`lg:px-6 lg:py-2 lg:grid lg:grid-cols-3 lg:gap-3 mt-8 lg:mt-0 lg:border-t lg:border-gray-200`}>
                                        <dt className="text-sm font-medium leading-5 text-gray-500 uppercase dark:text-white">Activity Title</dt>
                                        <dt className="mt-1 text-sm leading-5 text-gray-500 dark:text-white lg:mt-0 lg:col-span-2">To review and realign all tertiary institutions programs to reflect the human capacity development needs of the Borno State vision (Agri-business, Commerce, Science & Technology).
                                        </dt>
                                    </div>
                                    <div className={`lg:px-6 lg:py-2 lg:grid lg:grid-cols-3 lg:gap-3 mt-8 lg:mt-0 lg:border-t lg:border-gray-200`}>
                                        <dt className="text-sm font-medium leading-5 text-gray-500 uppercase dark:text-white">Sub-activities</dt>
                                        <dt className="mt-1 text-sm leading-5 text-gray-500 dark:text-white lg:mt-0 lg:col-span-2">
                                            <ul className="list-disc list-inside">
                                                <li>Achieved UN SDG’s goals on Mass Literacy</li>
                                                <li>Renovation of Male hostel</li>
                                            </ul>
                                        </dt>
                                    </div>
                            </dl>
                        </div>
                    </div>
					{/* <div className="px-4 py-5 lg:p-0">
                        <dl className="border-b border-gray-200">
                            {Object.keys(sti).filter(key => key!=="activities").map((key, index) => (
                                <div className={`lg:px-6 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-3 ${index!==0 && "mt-8 lg:mt-0 lg:border-t lg:border-gray-200"}`}>
                                    <dt className="text-sm font-medium leading-5 text-gray-500 uppercase dark:text-white">{key}</dt>
                                    <dt className="mt-1 text-sm leading-5 text-gray-500 dark:text-white lg:mt-0 lg:col-span-2">{sti[key]}</dt>
                                </div>
                                )
                            )}
                        </dl>
                        
                        <dl>
                            {sti?.activities?.map(({title, code}, index) => (
                                <div className={`lg:px-6 lg:py-5 lg:grid lg:grid-cols-4 lg:gap-3 ${index!==0 && "mt-8 lg:mt-0 lg:border-t lg:border-gray-200"}`}>
                                    <dt className="dark:text-white">ACTIVITIES</dt>
                                    <dt className="text-sm font-medium leading-5 text-gray-500 dark:text-white">{code ?? "Empty"}</dt>
                                    <dt className="mt-1 text-sm leading-5 text-gray-500 dark:text-white lg:mt-0 lg:col-span-2">{title ?? "Empty Title"}</dt>
                                </div>
                                )
                            )}
                        </dl>
                    </div> */}
					{/* <ul className="list-disc list-inside">
                        {strategy.goals.map(goal => (
                            <li key={goal} className="w-full">{goal}</li>
                        ))}
                    </ul> */}
				</Accordion>
			))}
		</div>
	);
}

export default STIPillars;
