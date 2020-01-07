import React from 'react';
import styled, {keyframes} from 'styled-components';

const Slide = ({id, url, images}) => {

    const delay = ((id * 10) - 10);
    const time = (images.length)*10;
    const firstInterval = (((images.length)/(time))*100)/2;
    const secondInterval = (firstInterval * 2) + 1;
    const thirdInterval = (firstInterval * 3) + 1;

    const imageAnimation = keyframes`
        0% { opacity: 0; background-position: 20% 50%; animation-timing-function: ease-in; }
        ${firstInterval}% { opacity: 1; background-position: 35% 50%; animation-timing-function: ease-out; }
        ${secondInterval}% { opacity: 1; background-position: 50% 50%; }
        ${thirdInterval}% { opacity: 0; background-position: 65% 50%; }
        100% { opacity: 0 }
    `;

    const Image = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
        background-position: 34% 50%;
        background-repeat: none;
        opacity: 0;
        z-index: 0;
        background-image: url(${url});
        animation: ${imageAnimation} ${time}s linear infinite 0s;
        animation-delay: ${delay}s;
    `;

    return (
        <li><Image/></li>
    );
}

export default Slide;