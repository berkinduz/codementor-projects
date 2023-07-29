import React, {useState} from 'react';
import ImageContainer from "./ImageContainer";
import {bodyParts} from "../utils/alpaca_constants";
import html2canvas from 'html2canvas';

function ImageBoard(props) {
    const [selectedPart, setSelectedPart] = useState('hair')
    const [selectedStyle, setSelectedStyle] = useState('default')
    let [currentAlpaca, setCurrentAlpaca] = useState(['curls', 'tilt-backward', 'angry', 'tongue', 'bend-backward', 'bubble-tea', 'earings', 'blue'])


    const downloadImage = () => {
        const table = document.getElementById('canvas');
        html2canvas(table).then(function (canvas) {
            const link = document.createElement('a');
            link.download = 'table.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }

    return (
        <div className='alpaca-generator'>
            <div>
                <div className='image-board' id='canvas'
                     style={{background: `${currentAlpaca[7]}`}}>
                    <ImageContainer
                        imageUrl={`/assets/accessories/${currentAlpaca[6]}.png`}
                        partName={'headphone'}/>
                    <ImageContainer imageUrl={`/assets/ears/${currentAlpaca[1]}.png`}
                                    partName={'ears'}/>
                    <ImageContainer imageUrl={`/assets/neck/${currentAlpaca[4]}.png`}
                                    partName={'neck'}/>
                    <ImageContainer imageUrl={`/assets/hair/${currentAlpaca[0]}.png`} partName={'hair'}/>
                    <ImageContainer imageUrl={`/assets/eyes/${currentAlpaca[2]}.png`} partName={'eyes'}/>
                    <ImageContainer imageUrl={`/assets/mouth/${currentAlpaca[3]}.png`} partName={'mouth'}/>
                    <ImageContainer imageUrl={`/assets/nose.png`} partName={'nose'}/>
                    <ImageContainer imageUrl={`/assets/leg/${currentAlpaca[5]}.png`} partName={'leg'}/>

                </div>
                <div className='downloadButton'>
                    <button onClick={downloadImage}>Download</button>
                </div>
            </div>

            <div className="selector-board">
                <div className="partSelector">
                    <h2>Accessorize The Alpaca's</h2>
                    <div>
                        {Object.keys(bodyParts).map((part) => (
                            <button className='selectButton' onClick={() => {
                                setSelectedPart(part)
                            }}>{part}</button>
                        ))}
                    </div>

                </div>
                <div className="styleSelector">
                    <h2>Style: {selectedPart}</h2>
                    <div>
                        {bodyParts[selectedPart].map((selected) => (
                            <button className='selectButton' onClick={() => {
                                setSelectedStyle(selected)
                                let updatedAlpaca = currentAlpaca
                                updatedAlpaca[Object.keys(bodyParts).indexOf(selectedPart)] = selected
                                setCurrentAlpaca(updatedAlpaca)
                            }}>{selected}</button>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ImageBoard;