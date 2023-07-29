import React from 'react';

function ImageContainer({imageUrl, partName}) {

    return (
        <div className='image-container'>
            <img src={imageUrl} alt="image" className={partName}/>
        </div>
    );
}

export default ImageContainer;