import React from 'react';
import tz from 'moment-timezone';
import moment from 'moment';

const EventsModalEntry = ( { item: {Title}, item: {POC}, item: {Description}, item: {Room}, item: {DateAndTime}, item: {EndDateAndTime} } ) => {

    // const newPOC = POC.replace('Contact: ', 'POC: ');
    const convertStartTime = moment(DateAndTime);
    const convertEndTime = moment(EndDateAndTime);
    const startTime = convertStartTime.tz('America/New_York').format('h:mm A');
    const endTime = convertEndTime.tz('America/New_York').format('h:mm A');
    
    // const localDate = new Date(DateAndTime).toString();

    // const convert = moment(DateAndTime);
    // const month = convert.tz('America/Los_Angeles').format('MMM').toUpperCase();
    // const day = convert.tz('America/Los_Angeles').format('D');
    // const time = convert.tz('America/Los_Angeles').format('h:mm A');

    return (
        <div className = 'modalevent'>
            <div className = 'eventtitle'>{Title}</div>
            <div className = 'eventpoc'>POC: {POC}</div>
            <div className = 'eventdescription'>{Description}</div>
            <div className = 'eventtime'>{startTime} - {endTime}</div>
            <div className = 'eventroom'>{Room}</div>
        </div>
    );
}

export default EventsModalEntry;