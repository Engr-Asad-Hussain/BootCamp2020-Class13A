import React, { useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

function Background2({ playState }) {
    let bg2 = useWebAnimations({
        keyframes: [
            { transfrom: 'translateX(0)' },
            { transform: 'translateX(-100%)', visibility: 'hidden' },
            { transform: 'translateX(100%)', visibility: 'hidden' },
            { transform: 'translateX(0)' }
        ],
        timing: {
            duration: 36000,
            iterations: Infinity
        }
    });
    useEffect(()=>{
        bg2.getAnimation().pause();
        playState[0].push(bg2);
    }, []);

    return (
        <div className="background2" ref={bg2.ref}>
            <img
                id="pawn-upright"
                alt="pawn-upright"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
            />
            <img
                id="palm1"
                alt="palm1"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
            />
            <img
                id="white-rook"
                alt="white-rook"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
            />
        </div>
    );
}
export default Background2;