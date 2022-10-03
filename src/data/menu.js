import { UserGroupIcon } from "@heroicons/react/20/solid";
import { ChartPieIcon, DocumentIcon, PaperClipIcon, MapIcon, Cog6ToothIcon, BuildingLibraryIcon, ViewColumnsIcon, VideoCameraIcon, VariableIcon } from "@heroicons/react/24/outline"

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
        title: "Projects",
        icon: <DocumentIcon className="w-6 h-6"/>,
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
        title: "STI Pillars",
        icon: <BuildingLibraryIcon className="w-6 h-6"/>,
        link: "/sti-pillars"
    },
    {
        title: "Tracked Indicators",
        icon: <ViewColumnsIcon className="w-6 h-6"/>,
        link: "/tracked-indicators"
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