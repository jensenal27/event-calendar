import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone';

const EventBlock = ({ title, date, type }) => {
    
    const convert = moment(date)
    const time = convert.tz('America/New_York').format('h:mm A');

        return(
            <span className = 'event' id = {type}>{title} | {time}</span>
        )
}

export default EventBlock;