
// For
function printEvenNumbersFor() {
    let sequenceNumbers = '';

    for (let i = 2; i <= 20; i++ ) {
        if (i % 2 === 0)
        sequenceNumbers += i + ' ';
    }

    return sequenceNumbers;
}

// while
function printEvenNumbersWhile() {
    let sequenceNumbers = '';

    let i = 2;
    while ( i <= 20) {
        if (i % 2 === 0) {
            sequenceNumbers += i + ' ';
        }

        i++;
    }

    return sequenceNumbers;
}

// do while
function printEvenNumbersDoWhile() {
    let sequenceNumbers = '';

    let i = 2;
     do {
         if (i % 2 === 0) {
             sequenceNumbers += i + ' ';
         }

         i++;

    } while ( i <= 20)

    return sequenceNumbers;
}

console.log(printEvenNumbersFor(20));
console.log(printEvenNumbersWhile(20));
console.log(printEvenNumbersDoWhile(20));