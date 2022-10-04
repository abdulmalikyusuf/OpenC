import { UserGroupIcon } from "@heroicons/react/20/solid";
import { ChartPieIcon, BuildingOffice2Icon, DocumentIcon, PaperClipIcon, MapIcon, Cog6ToothIcon, FlagIcon, VideoCameraIcon, VariableIcon } from "@heroicons/react/24/outline"

const menu = [
    {
        title: "Dashboard Overview",
        icon: <ChartPieIcon className="w-6 h-6"/>,
        link: "/home"
    },
    {
        title: "Accountability",
        icon: <VariableIcon className="w-6 h-6"/>,
        link: "/accountability"
    },
    {
        title: "Contracts",
        icon: <BuildingOffice2Icon className="w-6 h-6"/>,
        link: "/projects"
    },
    {
        title: "Report",
        icon: <PaperClipIcon className="w-6 h-6"/>,
        link: "/report"
    },
    {
        title: "Sites",
        icon: <MapIcon className="w-6 h-6"/>,
        link: "/sites"
    },
    {
        title: "Red Flags",
        icon: <FlagIcon className="w-6 h-6"/>,
        link: "/red-flags"
    },
    {
        title: "Volunteers",
        icon: <UserGroupIcon className="w-6 h-6"/>,
        link: "/volunteers"
    },
    {
        title: "MoV",
        icon: <VideoCameraIcon className="w-6 h-6"/>,
        link: "/mov"
    },
    {
        title: "User Settings",
        icon: <Cog6ToothIcon className="w-6 h-6"/>,
        link: "/settings"
    },
]

export default menu;