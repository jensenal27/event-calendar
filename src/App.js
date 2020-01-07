import React, {useState, useEffect} from 'react';
import './App.css';
import './components/calendar/calendar.css';
import moment from 'moment';
import Calendar from './components/calendar/calendar';
import Slideshow from './components/slideshow/slideshow';
import {eventData} from './info.js';
import {closureData} from './info.js';
import {imageData} from './info.js';
import {passTest} from './info.js';

const App = () => {

  const [events, setEvents] = useState([]);
  const [closures, setClosures] = useState([]);
  const [images, setImages] = useState([]);
  const [wifi, setWifi] = useState([]);

  useEffect(() => {
    setEvents(eventData);
    setClosures(closureData);
    setImages(imageData);
    setWifi(passTest);
  }, []);

    events.sort((a, b) => moment(a.DateAndTime) - moment(b.DateAndTime));

    const resetData = () => {
        
        // let payload = {
        // method: 'GET',
        // headers: { "Accept": "application/json; odata=nometadata" },
        // credentials: 'same-origin'
        // }

        // let url = 'x';
        
        // fetch(url, payload)
        //   .then((response) => {
        //     response.json()
        //     .then((res) => {
        //       setImages(res.value);
        //     });
        //   });

        // fetch(url, payload)
        //   .then((response) => {
        //     response.json()
        //     .then((res) => {
        //       setEvents(res.value);
        //     });
        //   });

        // fetch(url, payload)
        //   .then((response) => {
        //     response.json()
        //     .then((res) => {
        //       setClosures(res.value);
        //     });
        //   });

        console.log('This is a demo.')

    }

  return (
    <div className="container">
      <Calendar events={events} closures={closures} images={images} resetData={resetData} wifi={wifi}/>
      <Slideshow images={images}/>
    </div>
  );
}

export default App;
