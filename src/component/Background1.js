import React, { useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

function Background1({ playState }) {
    let bg1 = useWebAnimations({
        keyframes: [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' }
        ],
        timing: {
            duration: 36000,
            iterations: Infinity
        }
    });
    useEffect(()=>{
        bg1.getAnimation().pause();
        playState[0].push(bg1);
    }, [])
    
    return (
        <div className="background1" ref={bg1.ref}>
            <img 
                id="red-pawn"
                alt="red-pawn"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
            />
            <img 
                id="red-knight"
                alt="red-knight"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
            />
            <img 
                id="palm2"
                alt="palm2"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
            />
        </div>
    );
}
export default Background1;