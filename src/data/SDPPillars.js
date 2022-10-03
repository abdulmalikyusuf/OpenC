import { MdConstruction, MdAgriculture, MdSupervisorAccount } from "react-icons/md"
import { GiHumanPyramid, GiTreehouse } from "react-icons/gi"
import { SiFlathub } from "react-icons/si"
import { BsPersonBadge, BsBuilding } from "react-icons/bs"

const SDPPillars = [
    {title: "Human Capital Development", code: "HCD", icon: GiHumanPyramid},
    {title: "Leadership in Agriculture", code: "LAG", icon: MdAgriculture},
    {title: "Healthy Citizenry", code: "H", icon: BsPersonBadge},
    {title: "Sustainable Environment", code: "E", icon: GiTreehouse},
    {title: "Regional Trade Hub", code: "TB", icon: SiFlathub},
    {title: "Reconstruction, Rehabilitation and Resettlement", code: "RRR", icon: MdConstruction},
    {title: "Purposeful Infrastructure", code: "PI", icon: BsBuilding},
    {title: "Accountable Governance", code: "AG", icon: MdSupervisorAccount},
]

export default SDPPillars;


export const pillarProjects = {
    labels: SDPPillars.map(pillar => pillar.code),
    data: [
        {
            label:"Target",
            backgroundColor: "#93a5be",
            series: [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66]
        },
        {
            label:"Reach",
            backgroundColor: "#4c5680",
            series: [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66].map(number => number-10)
        },
    ]
}