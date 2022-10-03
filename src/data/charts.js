import { FaTasks, FaPeopleCarry } from 'react-icons/fa';
import { MdConstruction, MdAgriculture, MdSupervisorAccount } from "react-icons/md"
import { GiHumanPyramid, GiTreehouse } from "react-icons/gi"
import { SiFlathub } from "react-icons/si"
import { BsBuilding } from "react-icons/bs"
import { AiOutlineMonitor } from "react-icons/ai"
import { BiTask } from "react-icons/bi"


const monitoredProjects = [
    { id: 1, label: "Monitored Projects", value: [1, 5, 2, 5, 4], color: "secondary", icon: AiOutlineMonitor },
    { id: 2, label: "Total Projects", value: [1, 5, 2, 5, 4].reverse(), color: "primary", icon: BiTask },
];

const themanticPillarProjects = [
    {id: 1, value: 32, color: "#262B40", label: "Human Capital Development", code: "HCD", icon: GiHumanPyramid},
    {id: 2, value: 47, color: "#262B40", label: "Leadership in Agriculture", code: "LAG", icon: MdAgriculture},
    {id: 3, value: 15, color: "#61DAFB", label: "Healthy Citizenry", code: "H", icon: FaPeopleCarry},
    {id: 4, value: 65, color: "#1B998B", label: "Sustainable Environment", code: "E", icon: GiTreehouse},
    {id: 5, value: 34, color: "#C96480", label: "Regional Trade Hub", code: "TB", icon: SiFlathub},
    {id: 6, value: 32, color: "#f5b759", label: "Reconstruction, Rehabilitation", code: "RRR", icon: MdConstruction},
    {id: 7, value: 65, color: "#C96480", label: "Purposeful Infrastructure", code: "PI", icon: BsBuilding},
    {id: 8, value: 75, color: "#cd632g", label: "Accountable Governance", code: "AG", icon: MdSupervisorAccount},
]

const themanticSectors = {
    extraProps: themanticPillarProjects.map(project => {
        return { value: project.value, icon: project.icon, code: project.code}
    }),
    labels: themanticPillarProjects.map(project => project.label),
    series: themanticPillarProjects.map(project => project.value),
    colors: themanticPillarProjects.map(project => project.color),
}

export {
    monitoredProjects,
    themanticPillarProjects,
    themanticSectors
};