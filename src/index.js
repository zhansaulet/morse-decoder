const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here

    let morseLettersArr = [];
    let word = '';

    console.log(expr);

    for (let i = 0; i < expr.length - 1; i++) {
        if (expr[i] == 1 && expr[i + 1] == 0) {
            word += '.';
            i++;
        } else if (expr[i] == 1 && expr[i + 1] == 1) {
            word += '-';
            i++;
        } else if (expr[i] == '*') {
            morseLettersArr.push(" ");
            i += 9;
        }

        if (i % 10 == 9) {
            morseLettersArr.push(word);
            word = '';
        }
    }

    //console.log(morseLettersArr[70]);


    for (let i = 0; i < morseLettersArr.length; i++) {
        let key = morseLettersArr[i];
        //console.log(key);

        if (key == " ") {
            morseLettersArr[i] = " ";
        } else {
            morseLettersArr[i] = MORSE_TABLE[key];
        }


    }

    return morseLettersArr.join("");

}

module.exports = {
    decode
};