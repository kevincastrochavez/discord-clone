import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h3>Kevin</h3>

                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channels-header">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>

                        <h4>Text Channel </h4>
                    </div>

                    <AddIcon className='sidebar__addChannel'/>
                </div>

                <div className="sidebar__channels-list">
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className='sidebar__voice-icon' fontSize='large' />

                <div className="sidebar__voice-info">
                    <h3>Voice Connected</h3>

                    <p>Stream</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
