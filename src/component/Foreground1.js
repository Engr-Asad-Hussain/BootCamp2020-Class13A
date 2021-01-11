import React, { useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

function Foreground1({ playState }) {
    let fg1 = useWebAnimations({
        keyframes: [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' }
        ],
        timing: {
            duration: 22000,
            iterations: Infinity
        }
    });
    useEffect(()=>{
        fg1.getAnimation().pause();
        playState[0].push(fg1);
    }, [])

    return (
        <div className="foreground1" ref={fg1.ref}>
            <img
                id="bush"
                alt="bush" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" 
            />
            <img 
                id="white-rook-upright"
                alt="white-rook-upright"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
            />
        </div>
    )
}
export default Foreground1;