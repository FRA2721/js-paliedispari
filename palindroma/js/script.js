// developer: Francesco Cimino;
// project: palindroma;
// language: javascript;

const wordInput = prompt("Plese enter a generic word:");

isPalindroma(wordInput);

// function
function isPalindroma(word) {

    // word-palindroma-variable
    let wordPalindroma= "";

    // loop
    for (let i = (word.length -1); i >= 0 ; i--) {
        const index = word[i];
        wordPalindroma += index;
        console.log(wordPalindroma);
    };

    // palindroma-variable
    let palindroma = false; 

    // conditional-statements
    if (wordPalindroma=== word) {
        palindroma = true;
        alert("The word that you wrote is palindroma... bye!");

    } else {
        console.log(palindroma);
        alert("The word that you wrote is not palindroma... bye!");
    };

    return palindroma;
}