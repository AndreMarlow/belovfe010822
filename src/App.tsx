import React, { useState } from 'react';
import './App.css';

function App() {

    const [randomBackgrounds, setRandomBackgrounds] = useState([
        'cats',
        'chubaka',
        'dogs',
        'dyno',
        'planets'
    ])
    const [buttonColor, setButtonColor] = useState<string>('E1E13A');

    const handleClick = () => {
        const backgrounds = [...randomBackgrounds]

        let index = backgrounds.length, randomIndex;

        while (index !== 0) {

            randomIndex = Math.floor(Math.random() * index);
            index--;

            [backgrounds[index], backgrounds[randomIndex]] = [
                backgrounds[randomIndex],
                backgrounds[index]
            ];
        }

        setButtonColor(Math.floor(Math.random() * 16777215).toString(16))
        setRandomBackgrounds(backgrounds)
    }

    return (
        <>
            <div className={['header', randomBackgrounds[0]].join(' ')}></div>

            <div className="content">
                <div className={['panel', randomBackgrounds[1]].join(' ')}></div>
                <div className={['content_inner', randomBackgrounds[2]].join(' ')}>
                    <div className="button" onClick={handleClick} style={{ backgroundColor: `#${buttonColor}`}}>Click Me</div>
                </div>
                <div className={['panel', randomBackgrounds[3]].join(' ')}></div>
            </div>

            <div className={['footer', randomBackgrounds[4]].join(' ')}></div>
        </>
    );
}

export default App;
