import React from 'react';
import moment from 'moment';

const Header = ({currentDate}) => {

    const dateFormat = "MMMM";

    return (
        <div className = 'headerdiv'>
            <div className="headerwrap">
                <div className='demoalert'><span>DEMO: Press F11 to view in Fullscreen</span></div>
                <div className="header-col">
                    <span className = 'month'>{moment(currentDate).format(dateFormat).toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;