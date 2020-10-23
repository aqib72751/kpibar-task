import React from 'react'
import './SidebarListItem.css'

function SidebarListItem({image,icon,title}) {
    return (
        <div className="sidebarListItem">
            <div className="sidebarListItemIcon">
                {icon}
            </div>
            <p>{title}</p>
        </div>
    )
}

export default SidebarListItem
