import React from "react";
import {  } from "react-icons/fa";

import STICodes from "../data/stiCodes";
import Accordion from "../components/Accordion";


function TrackedIndicators() {
    return (
        <div className="px-10 mt-4 space-y-2 lg:space-y-5">
            <h2 className="mb-3 text-center h2 lg:mb-5">Red Flags</h2>
            <Accordion heading="Completed Projects">
                <ul className="list-disc list-inside">
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                    <li>Project 4</li>
                    <li>Project 5</li>
                </ul>
            </Accordion>
            <Accordion heading="Projects in each Local Government Area">
                <div className="grid md:grid-cols-2 xl:grid-cols-3">
                    {
                        [1,2,3,4,5].map(lga => (
                            <div key={lga} className="">
                                <ul className="list-disc list-inside">
                                    <h6 className="h6">LGA {lga}</h6>
                                    <li>Project 1</li>
                                    <li>Project 2</li>
                                    <li>Project 3</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </Accordion>
            <Accordion heading="Total number of projects across sectors">
                <div className="grid md:grid-cols-2 xl:grid-cols-3">
                    {
                        STICodes.map(sti => (
                            <div key={sti.code} className="mx-2">
                                <ul className="list-disc list-inside">
                                    <h6 className="h6">{sti.title} - {sti.code}</h6>
                                    <li>Project 1</li>
                                    <li>Project 2</li>
                                    <li>Project 3</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </Accordion>
        </div>
        
    );
}

export default TrackedIndicators




export const ProjectsTable = ({ toggleProjectModal, deleteProjectModal }) => {
  

 
};