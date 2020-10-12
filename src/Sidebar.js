import React from 'react';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@material-ui/core';
import { ExpandMore, Add, SignalCellularAlt, Call, InfoOutlined, Headset, Mic, Settings } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h3>Kevin</h3>

                <ExpandMore/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channels-header">
                    <div className="sidebar__header">
                        <ExpandMore/>

                        <h4>Text Channel </h4>
                    </div>

                    <Add className='sidebar__addChannel'/>
                </div>

                <div className="sidebar__channels-list">
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAlt className='sidebar__voice-icon' fontSize='large' />

                <div className="sidebar__voice-info">
                    <h3>Voice Connected</h3>

                    <p>Stream</p>
                </div>

                <div className="sidebar__voice-icons">
                    <InfoOutlined />
                    <Call />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar />
                <div className="sidebar__profile-info">
                    <h3>Kevin Castro</h3>
                    <p>This is ID</p>
                </div>

                <div className="sidebar__profile-icons">
                    <Mic/>
                    <Headset/>
                    <Settings/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
