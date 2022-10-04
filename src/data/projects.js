import { lgas } from "./lgas"

export const projects = [
    {
        basisOfProject: "Construction of drainage",
        projectName: "Construction of drainage to prevent flooding in LGA 1",
        themanticSector: "Infrastructure",
        sdpPillar: "ABC Construction Inc.",
        stiCode: new Date().toLocaleDateString()
    }
]

export const lgaProjects = {
    series: [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66],
    labels: lgas
  }

export const projectData = {
    labels: lgas,
    data: [
        {
            label:"Total Number of Projects",
            backgroundColor: "#93a5be",
            series: [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66]
        },
        {
            label:"Monitored Projects",
            backgroundColor: "#4c5680",
            series: [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66].map(number => number-10)
        },
    ]
}