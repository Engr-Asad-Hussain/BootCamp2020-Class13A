const keyframesScene1 = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
];

const keyframesScene2 = [
    { transfrom: 'translateX(0)' },
    { transform: 'translateX(-100%)', visibility: 'hidden' },
    { transform: 'translateX(100%)', visibility: 'hidden' },
    { transform: 'translateX(0)' }
];

var aliceQueen = document.querySelector('#alice-queen');
var aliceAnimation = aliceQueen.animate([
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }
], {
    easing: 'steps(7, end)',
    direction: "reverse",
    duration: 600,
    iterations: Infinity
});
aliceAnimation.pause();

var element1 = document.querySelector('.foreground1');
var animation1 = element1.animate(
    keyframesScene1,
    {
        duration: 22000,
        iterations: Infinity
    }
);
animation1.pause();

var element2 = document.querySelector('.background1');
var animation2 = element2.animate(
    keyframesScene1, {
    duration: 36000,
    iterations: Infinity
});
animation2.pause();

var element3 = document.querySelector('.background2');
var animation3 = element3.animate(
    keyframesScene2,
    {
        duration: 36000,
        iterations: Infinity
    }
);
animation3.pause();

var element4 = document.querySelector('.foreground2');
var animation4 = element4.animate(
    keyframesScene2,
    {
        duration: 20000,
        iterations: Infinity
    }
);
animation4.pause();

const animations = [aliceAnimation, animation1, animation2, animation3, animation4];
function Play() {
    animations.forEach(element => {
        element.play();
    });
}
function Pause() {
    animations.forEach((element) => {
        element.pause();
    });
}

document.addEventListener("dblclick", ()=>{
    animations.forEach( (element)=>{
        if (element == aliceAnimation) {
            element.playbackRate += 0.01;
        } else {
            element.playbackRate *= 1.5;
        }
    });
});