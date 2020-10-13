import React, { useEffect, useState } from 'react';
import SidebarChannel from './SidebarChannel';
import { Avatar, withStyles } from '@material-ui/core';
import { ExpandMore, Add, SignalCellularAlt, Call, InfoOutlined, Headset, Mic, Settings } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot((snapshot) => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        ))
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt('Enter a new channel name')

        if(channelName) {
            db.collection('channels').add({
                channelName
            })
        }
    }
    
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h3>{user.displayName}</h3>

                <ExpandMore fontSize='large' />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channels-header">
                    <div className="sidebar__header">
                        <ExpandMore />

                        <h4>Channels</h4>
                    </div>

                    <LightTooltip title='Add'>
                        <Add fontSize='large' onClick={handleAddChannel} className='sidebar__addChannel'/>
                    </LightTooltip>  
                </div>

                <div className="sidebar__channels-list">
                    {
                        channels.map(({id, channel}) => (
                            <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                        ))
                    }
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
                <LightTooltip title='Log Out'>
                    <Avatar className='sidebar__profile-logout' onClick={() => auth.signOut()} src={user.photo} />
                </LightTooltip>                
                
                <div className="sidebar__profile-info">
                    <h3>{user.displayName}</h3>
                    <p>{user.userId.substring(0, 5)}</p>
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
