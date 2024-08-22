module.exports = function toReadable (number) {
    let stringNumber = number.toString();
    let finalString = "";

    if (number < 10) {
        finalString = unities(stringNumber);
    } else if (number > 9 && number < 20) {
        finalString = tenToNineteen(stringNumber);
    } else if (number > 19 && number < 100) {
        finalString = tens(stringNumber);
    } else if (number >= 100) {
        finalString = hundreds(stringNumber);
    }

    return finalString;
}

function unities(stringNumber) {
    switch (stringNumber) {
        case '0':
            return 'zero';
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
    }
}

function tenToNineteen(stringNumber) {
    switch (stringNumber) {
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
    }
}

function twentyToNinety(stringNumber) {
    switch (stringNumber) {
        case '2':
            return 'twenty';
        case '3':
            return 'thirty';
        case '4':
            return 'forty';
        case '5':
            return 'fifty';
        case '6':
            return 'sixty';
        case '7':
            return 'seventy';
        case '8':
            return 'eighty';
        case '9':
            return 'ninety';
    }
}

function tens(stringNumber) {
    if (stringNumber[1] === "0") {
        return twentyToNinety(stringNumber[0])
    }

    return twentyToNinety(stringNumber[0]) + " " + unities(stringNumber[1]);
}

function hundreds(stringNumber) {
    if (stringNumber[1] === "0" && stringNumber[2] === "0") {
        return unities(stringNumber[0]) + " hundred"
    } else if (stringNumber[1] === "0") {
        return unities(stringNumber[0]) + " hundred " + unities(stringNumber[2]);
    } else if (parseInt(stringNumber[1] + stringNumber[2]) > 9 && parseInt(stringNumber[1] + stringNumber[2]) < 20) {
        return unities(stringNumber[0]) + " hundred " + tenToNineteen(stringNumber[1] + stringNumber[2]);
    } else if (stringNumber[2] === "0") {
        return unities(stringNumber[0]) + " hundred " + twentyToNinety(stringNumber[1]);
    }

    return unities(stringNumber[0]) + " hundred " + twentyToNinety(stringNumber[1]) + " " + unities(stringNumber[2]);
}