import React from 'react';
import EventsModalEntry from './eventsmodalentry';
import {useTransition, animated, config } from 'react-spring';

const EventsModal = ({ modals }) => {

    const transition = useTransition(modals, modals => modals.Id, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatex(-600px)' },
        enter: { opacity: 1, transform: 'translatex(0px)' },
        leave: { opacity: 0, transform: 'translatex(-600px)' },
        trail: 400
    });

        return (
            <div className = 'eventsmodalentry'>
                {transition.map(({ item, key, props }) => (
                    <animated.div key={key} style={props}>
                        <EventsModalEntry item={item}/>
                    </animated.div>
                ))}
            </div>
        )
}

export default EventsModal;