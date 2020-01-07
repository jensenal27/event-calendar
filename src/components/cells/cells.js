import React from 'react';
import moment from 'moment';
import EventBlock from './eventblock';
import ClosureBlock from './closureblock';
import './cells.css';

const Cells = ({ currentDate, selectedDate, modalAppear, events, closures, setSelectedDate, actualDate, setModal, setShowModal, setModalDate, setActiveModal }) => {

        const monthStart = moment(currentDate).startOf('month');
        const monthEnd = moment(monthStart).endOf('month');
        const startDate = moment(monthStart).startOf('week');
        const endDate = moment(monthEnd).endOf('month');
        const dateFormat = "D";
        const modalDateFormat ="dddd, MMMM Do";

        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
            formattedDate = moment(day).format(dateFormat);
            const cloneDay = day;

            const onDateClick = day => {
                if(moment(day).isSame(selectedDate) === false) {
                    setSelectedDate(day);
                    setModalDate(moment(day).format(modalDateFormat));
                    modalAppear(day);
                    setShowModal(true);
                } else {
                    setSelectedDate([]);
                    setModal([]);
                    setActiveModal([]);
                    setShowModal(false);
                }
            }
            
            days.push(
                <div
                className={`column cell ${moment(day).isSame(selectedDate) && !moment(day).isSame(monthStart, 'month')
                ? "dis-selected" : !moment(day).isSame(monthStart, 'month')
                ? "disabled" : moment(day).isSame(selectedDate)
                ? "selected" : moment(day).isSame(actualDate, 'day')
                ? "current" : "" }`}
                key={day}
                onClick={() => onDateClick(cloneDay)}
                >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
                <div className = 'closurewrap'>
                    {
                    closures.map((closure, i) => {
                        if(day.isSame(closures[i].DateAndTime, 'day')) {
                            return(
                            <ClosureBlock
                            key={i}
                            id={closures[i].id}
                            type={closures[i].ClosureType}
                            description={closures[i].Description}/>
                            );
                        } else {
                            return null
                        }
                    })
                }
                </div>
                <div className = 'eventwrap'>
                    {
                    events.map((event, i) => {
                        if(day.isSame(events[i].DateAndTime, 'day')) {
                            return(
                            <EventBlock
                            key={i}
                            id={events[i].id}
                            title={events[i].Title}
                            date={events[i].DateAndTime}
                            type={events[i].EventType}/>
                            );
                        } else {
                            return null
                        }
                    })
                }
                </div>
                </div>
                );
            day = moment(day).add(1, 'days');
            }
            rows.push(
                <div className="row" key={day}> {days} </div>
            );
            days = [];
            }
        return (
            <div className = 'rowsdiv'>{rows}</div>
        )
}

export default Cells;