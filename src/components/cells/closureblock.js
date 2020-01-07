import React from 'react';

const ClosureBlock = ({ type, description }) => {
    return(
        <span className = 'closure' id = {type}>{description}</span>
    )
}

export default ClosureBlock;