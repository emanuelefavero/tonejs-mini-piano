document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {

    // SAMPLER
    const sampler = new Tone.Sampler({
        urls: {
            "C3": "piano-C3.mp3",
        },
        release: 1,
        baseUrl: "sounds/",
    });

    // FX 1
    const filterCutoff = document.querySelector('#cutoff').value;
    const fx1 = new Tone.Filter(filterCutoff, 'lowpass');
    fx1.rolloff = '-48';

    // FX 2
    const delayTime = document.querySelector('#delayTime').value / 100;
    const delayFeedback = document.querySelector('#delayFeedback').value / 100;
    const fx2 = new Tone.FeedbackDelay(delayTime, delayFeedback);

    switch (key) {
        case "a":

            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(["C3"], 1).chain(fx1, fx2, Tone.Destination);
            })
            break;
        case "s":

            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(["D3"], 1).chain(fx1, fx2, Tone.Destination)
            })
            break;
        case "d":

            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(["D#3"], 1).chain(fx1, fx2, Tone.Destination)
            })
            break;
        case "f":

            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(["F3"], 1).chain(fx1, fx2, Tone.Destination)
            })
            break;
        case "g":

            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(["G3"], 1).chain(fx1, fx2, Tone.Destination)
            })
            break;
        case "h":

            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(["A#3"], 1).chain(fx1, fx2, Tone.Destination)
            })
            break;
        case "j":

            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(["C4"], 1).chain(fx1, fx2, Tone.Destination)
            })
            break;
        default:
            console.log(key);
    }
}

// KEY ANIMATIONS
function buttonAnimation(currentKey) {

    const activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("key-pressed");

    setTimeout(function () {
        activeButton.classList.remove("key-pressed");
    }, 100);
}
