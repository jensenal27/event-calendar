import React from 'react';

const ModalClosureBlock = ({ type, description }) => {
    return(
        <div className = 'modalclosure' id = {'modalclosure-'+type}>{description}</div>
    )
}

export default ModalClosureBlock;