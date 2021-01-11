import React, { useState, useEffect } from 'react';

function Buttons({ playState }) {
    let [btn, setBtn] = useState(false);

    useEffect(()=>{
        if ( playState[0].length !== 0 ) {
            if ( btn === true ) {
                playState[0].forEach( (element, index)=>{
                    element.getAnimation().play();
                });
            } else {
                playState[0].forEach( (element)=>{
                    element.getAnimation().pause();
                });
            }
        }
    }, [btn, playState]);
    
    document.ondblclick = () => {
        if (btn === true) {
            playState[0].forEach( (element)=>{
                if (element.ref.current.alt === "alice" ) {
                    element.getAnimation().playbackRate += 0.05;
                    console.log(element.getAnimation().playbackRate);
                } else {
                    element.getAnimation().playbackRate *= 1.5;
                }
            });
        }
    }
    document.onwheel = () => {
        if (btn === true) {
            playState[0].forEach( (element)=>{
                if (element.ref.current.alt === "alice" ) {
                    element.getAnimation().playbackRate -= 0.01;
                    console.log(element.getAnimation().playbackRate);
                } else {
                    element.getAnimation().playbackRate /= 1.1;
                }
            });
        }
    }

    return (
        <div className="buttons">
            <button onClick={
                ()=>{ 
                    setBtn( true );
                }
            }>Play</button>
            <button onClick={
                ()=> { 
                    setBtn( false );
                }
            }>Pause</button>
        </div>
    );
}
export default Buttons;