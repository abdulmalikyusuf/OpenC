import React from 'react'

import Accordion from '../components/Accordion';
import { strategicGoals } from '../data/strategicGoals';


function STIPillars() {
    return (
        <div className="space-y-2 lg:space-y-5 mt-4 pb-10">
            <h2 className="h2 text-center">STI PIllars</h2>
            {strategicGoals.map(strategy => (
                <Accordion key={strategy.pillar} heading={strategy.pillar}>
                    <ul className="list-disc list-inside">
                        {strategy.goals.map(goal => (
                            <li key={goal} className="w-full">{goal}</li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </div>
    )
}

export default STIPillars