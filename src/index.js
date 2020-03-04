module.exports = function toReadable (number) {

    let arrNumber = Array.from(number.toString(), Number).reverse();
    let comparator = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand',
        1000000: 'million',
        1000000000: 'milliard'
    };
    let result = [];

    arrNumber.forEach( (element, index) => {
        if (element !== 0) {

            if (index % 3 === 2) {
                result.unshift(comparator[100]);
                result.unshift(comparator[element]);
            }
            else {
                if (index % 3 === 1) {
                    if (element === 1) {
                        result.shift();
                        result.unshift(comparator[element * 10 + arrNumber[index - 1]]);
                    }
                    else {
                        result.unshift(comparator[element * 10]);
                    }
                }
                else {
                    if (index) {
                        result.unshift(comparator[Math.pow(10, index)]);
                    }
                    result.unshift(comparator[element]);
                }
            }
        }
        else {
            if (arrNumber.length === 1) {
                result.unshift('zero');
            }
        }
    });
    
    return result.join(' ');
}
