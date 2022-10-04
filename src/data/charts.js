import { FaSchool, FaHospitalUser } from 'react-icons/fa';
import { MdAgriculture } from "react-icons/md"
import { BsBuilding } from "react-icons/bs"
import { AiOutlineMonitor } from "react-icons/ai"
import { BiTask } from "react-icons/bi"


const monitoredProjects = [
    { id: 1, label: "Monitored Projects", value: [1, 5, 2, 5, 4], color: "secondary", icon: AiOutlineMonitor },
    { id: 2, label: "Total Projects", value: [1, 5, 2, 5, 4].reverse(), color: "primary", icon: BiTask },
];

const themanticPillarProjects = [
    {id: 1, value: 32, color: "#262B40", label: "Education", code: "HCD", icon: FaSchool},
    {id: 2, value: 47, color: "#262B40", label: "Health", code: "LAG", icon: FaHospitalUser},
    {id: 3, value: 15, color: "#61DAFB", label: "Infrastructure", code: "H", icon: BsBuilding},
    {id: 4, value: 65, color: "#1B998B", label: "Agriculture", code: "E", icon: MdAgriculture},
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