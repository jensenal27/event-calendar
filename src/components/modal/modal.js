import React from 'react';
import EventsModal from './eventsmodal';
import {useTransition, animated, config} from 'react-spring';

const Modal = ({showModal, modalDate, modals, modalClosures}) => {

    const transition = useTransition(showModal, null, {
        config: config.gentle,
        from: {opacity: 0, transform: 'translatex(-600px)'},
        enter: {opacity: 1, transform: 'translatex(0px)'},
        leave: {opacity: 0, transform: 'translatex(-600px)'}
    });

    return transition.map(({item, props, key}) =>
        item && (<animated.div className = 'modaldiv' key={key} style={props}>
            <EventsModal modalDate={modalDate} modals={modals} modalClosures={modalClosures}/>
        </animated.div>)
    );
}

export default Modal;