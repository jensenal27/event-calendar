import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Header from '../header/header';
import DaysOfWeek from '../daysofweek/daysofweek';
import Cells from '../cells/cells';
import Modal from '../modal/modal';
import Map from '../map/map';
import wifiIcon from '../../icons/wifi.svg';
import nextIcon from '../../icons/next.svg';
import lastIcon from '../../icons/last.svg';
import mapIcon from '../../icons/map.svg';
import closeIcon from '../../icons/close.svg';
import resetIcon from '../../icons/reset.svg';

const Calendar = ({events, closures, images, wifi, resetData}) => {

    const [actualDate, setActualDate] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState([]);
    const [modals, setModal] = useState([]);
    const [modalClosures, setModalClosures] = useState([]);
    const [activeModal, setActiveModal] = useState([]);
    const [modalDate, setModalDate] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [idleTimer, setIdleTimer] = useState(1);

    const count = () => {
            setIdleTimer((idleTimer) => idleTimer < 60 ? idleTimer + 1 : 0);
    }

    const resetTimer = () => {
        setIdleTimer(1);
    }

    const pass = wifi.map((info, i) => {
        return(info.Password);
    })

    const net = wifi.map((info, i) => {
        return(info.Network);
    })

    useEffect(() => {
        const interval = setInterval(() => {
            count();
        }, 1000);
        return () => clearInterval(interval);
    }, [idleTimer]);

    useEffect(() => {
        if (idleTimer === 0) {
            let remainActive = document.getElementsByClassName('headerdiv');
            let monthCheck = document.getElementsByClassName('monthtoggle');
            let mapCheck = document.getElementsByClassName('maptoggle');
            let wifiCheck = document.getElementsByClassName('wifitoggle');
            remainActive[0].click();
            setSelectedDate([]);
            setModal([]);
            setActiveModal([]);
            setShowModal(false);
            setActualDate(new Date());
            setCurrentDate(new Date());
            setShowMap(false);
            if(monthCheck[0].classList.contains('flip')) {
                monthCheck[0].classList.remove('flip');
            };
            if(mapCheck[0].classList.contains('flip')) {
                mapCheck[0].classList.remove('flip');
            };
            if(wifiCheck[0].classList.contains('flip')) {
                wifiCheck[0].classList.remove('flip');
            }
        }
    }, [idleTimer]);

    const modalAppear = (day) => {
        setModal(
            [...events.filter(modal => {
                return moment(modal.DateAndTime).isSame(day, 'day')
            })]
        );
        setModalClosures(
            [...closures.filter(modal => {
                return moment(modal.DateAndTime).isSame(day, 'day')
            })]
        );
        setActiveModal(day);
    }

    const handleFlip = (e) => {
        if (e.target.classList.contains('flip')) {
            e.target.classList.remove('flip')
        } else {
            e.target.classList.add('flip');
        }
    }

    const changeMonth = (e) => {
        if (moment(currentDate).isSame(moment(actualDate, 'month'))){
            handleFlip(e);
            setCurrentDate(moment(currentDate).add(1, 'months'));
        } else if (moment(currentDate).isSame(moment(actualDate, 'month').add(1, 'months'))){
            handleFlip(e);
            setCurrentDate(moment(currentDate).subtract(1, 'months'));
        }
    }

    const toggleMap = (e) => {
        setShowMap(!showMap);
        handleFlip(e);
    }

    return (
        <div className="calendar" onClick={resetTimer}>
            <div className = 'titlediv'><span className='title'>Event Space</span><span className ='titleblock'></span><span className = 'subtitle'>CULTURE CALENDAR</span></div>
            <Header currentDate={currentDate}/>     
            <DaysOfWeek currentDate={currentDate}/>         
            <div className = 'cellsdiv'><Cells closures={closures} currentDate={currentDate} actualDate={actualDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setModal={setModal} setModalDate={setModalDate} modalAppear={modalAppear} setActiveModal={setActiveModal} setShowModal={setShowModal} events={events}/></div>
            <Modal showModal={showModal} modalDate={modalDate} modals={modals} modalClosures={modalClosures}/>
            <Map showMap={showMap} toggleMap={toggleMap}/>
            <div className = 'testbutton' onClick = {resetData}>
                <img src = {resetIcon} alt = ''/>
            </div>
            <div className = 'calendarkey'>
                <div className = 'leftkey'>
                    <span id = 'keytitle'>Events</span>
                    <span id = 'EventTypeOne'>Event Type</span>
                    <span id = 'EventTypeTwo'>Event Type</span>
                    <span id = 'EventTypeThree'>Event Type</span>
                    <span id = 'EventTypeFour'>Event Type</span>
                </div>
                <div className = 'rightkey'>
                    <span id = 'keytitle'>Closures</span>
                    <span id = 'ClosureTypeOne'>Closure Type</span>
                    <span id = 'ClosureTypeTwo'>Closure Type</span>
                    <span id = 'ClosureTypeThree'>Closure Type</span>
                    <span id = 'keyHoliday'>Holiday</span>
                </div>
            </div>
            <div className = 'maptoggle' onClick = {toggleMap}>
                <div className = 'togglefront'><div className = 'togglemain'><img src = {mapIcon} alt = ''/></div><span>Tap for Seating Chart</span></div>
                <div className = 'toggleback'><div className = 'togglemain'><img src = {closeIcon} alt = ''/></div><span>Tap to Close</span></div>
            </div>
            <div className = 'monthtoggle' onClick = {changeMonth}>
                <div className = 'togglefront'><div className = 'togglemain'><img src = {nextIcon} alt = ''/></div><span>Tap for Next Month</span></div>
                <div className = 'toggleback'><div className = 'togglemain'><img src = {lastIcon} alt = ''/></div><span>Tap for This Month</span></div>
            </div>
            <div className = 'wifitoggle' onClick = {handleFlip}>
                <div className = 'togglefront'><div className = 'togglemain'><img src = {wifiIcon} alt = ''/></div><span>Tap for Wi-Fi Password</span></div>
                <div className = 'toggleback'><div className = 'togglemain'>net: {net[0]}<br/>pw: {pass[0]}</div><span>Tap to Close</span></div>
            </div>
        </div>
    );
}

export default Calendar;