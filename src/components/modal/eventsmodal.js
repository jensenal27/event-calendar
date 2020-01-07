import React from 'react';
import EventsModalWrapper from './eventsmodalwrapper';
import ModalClosureBlock from './modalclosureblock';
import {useTransition, animated, config } from 'react-spring';
import './eventsmodal.css';

const EventsModal = ({ modalDate, modals, modalClosures }) => {

    const transition = useTransition(modals, modals => modals.Id, {
        config: config.gentle,
        from: { opacity: 0, width: 0, height: 0, transform: 'translatex(-600px)' },
        enter: { opacity: 1, width: 1, height: 1, transform: 'translatex(0px)' },
        leave: { opacity: 0, width: 0, height: 0, transform: 'translatex(-600px)' }
    });

        return (
            <div className = 'eventsmodalwrap'>
                <div className = 'modaldate'>{modalDate}</div>
                <div className = 'modalclosurewrap'>
                    {
                        modalClosures.map((closure, i) => {
                            return(
                                <ModalClosureBlock
                                key={i}
                                id={modalClosures[i].id}
                                type={modalClosures[i].ClosureType}
                                description={modalClosures[i].Description}/>
                                );
                        })
                    }    
                </div>
                {transition.map(({ item, key, props }) => (
                    <animated.div key={key} style={props}>
                        <EventsModalWrapper modals={modals}/>
                    </animated.div>
                ))}
            </div>
        )
}

export default EventsModal;