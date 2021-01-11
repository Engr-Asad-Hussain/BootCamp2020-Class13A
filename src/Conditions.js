function Conditions(states, buttonState) {
    console.log(buttonState[0]);
    if (buttonState[0] == true) {
        states.getAnimation().play();
    } else {
        states.getAnimation().pause();
    }
};

export default Conditions;