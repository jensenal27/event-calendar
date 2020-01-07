import React from 'react';
import Slide from './slide';
import './slideshow.css';

const Slideshow = ({images}) => {

    return(
        <div className = 'slideshowwrap'>
            <ul className = 'slideshow'>
                {images.map((image, i) => {
                    return (
                        <Slide
                        key = {i}
                        images = {images}
                        id = {images[i].Id}
                        url = {images[i].Url}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default Slideshow;