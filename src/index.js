module.exports = function toReadable(number) {
    const firstNineteen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const secondNine = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const decade = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const unitsForHundreds = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    if (number < 20) {
        return firstNineteen[number];
    } else if (number > 19 && number < 100) {
        number = String(number);
        if (number[1] != 0) {
            return `${decade[number[0]]} ${firstNineteen[number[1]]}`;
        } else {
            return `${decade[number[0]]}`;
        }
    } else if (number > 99) {
        number = String(number);
        if (number[2] == 0 && number[1] == 0) {
            return `${unitsForHundreds[number[0]]} hundred`;
        } else if (number[2] == 0 && number[1] != 0 && number[1] != 1) {
            return `${unitsForHundreds[number[0]]} hundred ${
                decade[number[1]]
            }`;
        } else if (number[1] == 0) {
            return `${unitsForHundreds[number[0]]} hundred ${
                unitsForHundreds[number[2]]
            }`;
        } else if (number[1] == 1) {
            return `${unitsForHundreds[number[0]]} hundred ${
                secondNine[number[2]]
            }`;
        } else {
            return `${unitsForHundreds[number[0]]} hundred ${
                decade[number[1]]
            } ${unitsForHundreds[number[2]]}`;
        }
    }
};
