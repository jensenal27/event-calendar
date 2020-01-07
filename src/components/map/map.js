import React from 'react';
import {useTransition, animated, config} from 'react-spring';
import map from './mapdemo.jpg';

const Map = ({showMap}) => {

    const transition = useTransition(showMap, null, {
        config: config.wobbly,
        from: {opacity: 0, transform: 'rotatex(90deg)'},
        enter: {opacity: 1, transform: 'rotatex(0deg)'},
        leave: {opacity: 0, transform: 'rotatex(90deg)'}
    });

    return transition.map(({item, props, key}) =>
        item && (<animated.div className = 'mapdiv' key={key} style={props}>
            <img id = 'map' src = {map} alt = 'map'/>
        </animated.div>)
    );
}

export default Map;