import React from 'react'
import { Notifications, EditLocationOutlined, PeopleAltRounded, SearchRounded, SendRounded, HelpRounded } from '@material-ui/icons'

function ChatHeader() {
    return (
        <div className='chatHeader'>
            <div className="chatHeader__left">
                <h3>
                    <span className='chatHeader__hash'>
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>

            <div className="chatHeader__right">
                <Notifications />
                <EditLocationOutlined />
                <PeopleAltRounded />

                <div className="chatHeader__search">
                    <input placeholder='Search' />
                    <SearchRounded />
                </div>

                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader
