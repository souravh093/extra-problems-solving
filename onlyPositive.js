function onlyPositive(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number < 0) {
            break;
        }
        positiveNumbers.push(number);
    }
    return positiveNumbers;

}

const getPositiveNumbers = onlyPositive([12, 72, 18, 85, -33, 93, 66]);
console.log(getPositiveNumbers);