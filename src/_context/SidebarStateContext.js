import React from "react";

export const SidebarStateContext = React.createContext();
SidebarStateContext.displayName = "SidebarState"

export default function SidebarStateProvider() {
    const [isOpen, setIsOpen] = React.useState(true)
    return {
        isOpen,
        toggleSidebar: setIsOpen
    }
}