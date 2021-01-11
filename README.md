# Alice Queen Race using React
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class13A.git

Surge: http://murky-twig123.surge.sh/

## Pre-requisite-01:
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class13A/tree/pre-requisite-01

## Pre-requisite-02:
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class13A/tree/pre-requisite-02


------------------------------------------------------------
#### easing in steps:
```
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
```

#### visibility: 'hidden':
```
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
```

#### React Hook useEffect has a missing dependency Either include it or remove the dependency array react-hooks/exhaustive-deps:
- This is because useEffect() have some variables that are not created inside useEffect(). So It is necessary to include all those variables in a dependency array.
- [btn, playState] is a depenedency array.
```
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
```

#### Events
- document.addEventListener() and document.ondblclick
- In my opinion addEventListener() consumes more power beacuse the body of this function may run muliple times on single event, I have notice this using console.log().
- On the other hand document.ondblclick is a property that triggers only onces when event takes place.