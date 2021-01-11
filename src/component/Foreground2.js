import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

function Foreground2({ playState }) {
    let fg2 = useWebAnimations({
        keyframes: [
            { transfrom: 'translateX(0)' },
            { transform: 'translateX(-100%)', visibility: 'hidden' },
            { transform: 'translateX(100%)', visibility: 'hidden' },
            { transform: 'translateX(0)' }
        ],
        timing: {
            duration: 20000,
            iterations: Infinity
        },
        onReady: () => {
            fg2.getAnimation().pause();
            playState[0].push(fg2);
        }
    });

    return (
        <div className="foreground2" ref={fg2.ref}>
            <img 
                id="palm3"
                alt="palm3"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            />
        </div>
    );
}
export default Foreground2;