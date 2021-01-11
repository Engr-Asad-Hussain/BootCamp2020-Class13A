import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

function AliceQueen({ playState }) {

    let aliceQueen = useWebAnimations({
        keyframes: [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' }
        ],
        timing: {
            duration: 700,
            direction: 'reverse',
            iterations: Infinity,
            easing: 'steps(7, end)'
        },
        onReady: () => {
            aliceQueen.getAnimation().pause();
            playState[0].push(aliceQueen);
        }
    });

    return (
        <div className="alice-queen">
            <img 
                id="alice" 
                alt="alice"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png" 
                ref={aliceQueen.ref}
            />      
        </div>
    );
}
export default AliceQueen;