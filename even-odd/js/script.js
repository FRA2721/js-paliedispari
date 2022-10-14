// developer: Francesco Cimino;
// project: even-odd;
// language: javascript;

// input-data
let oddOrEven = prompt("Please, chose between odd or even:");
let userNumChoice = parseFloat(prompt(`Please, chose a ${oddOrEven} number between 1 to 5:`));

// computer-selection
const pcNumChoice = rndGenerator(1, 10);
const verdict = userNumChoice + pcNumChoice;

if (oddOrEven === isOddOrEven(verdict)) {
    alert(`${userNumChoice} + ${pcNumChoice} =  ${isOddOrEven(verdict)}, you won! Congratulation!!!`);
} else {
    alert(`${userNumChoice} + ${pcNumChoice} =  ${isOddOrEven(verdict)}, you lost! I am sorry...`);
}

// function-rndGenerator
function rndGenerator(min, max) {
    const rdnNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return rdnNumber;
}

// function-isOddOrEven
function isOddOrEven(userChoise) {

    // isVerdict-variable
    let isVerdict = "odd";

    if (userChoise % 2 === 0) {
        isVerdict = "even";
    } 

    return isVerdict;
}