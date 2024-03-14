function reverseNumber(number) {
    let numString = number.toString();
    let reversedString = '';
    // Loop through each character of the string in reverse order
    for (let i = numString.length - 1; i >= 0; i--) {
        reversedString += numString[i];
    }
    let reversedNumber = parseInt(reversedString);// to return a string as a number
    return reversedNumber;
}

// output checking
console.log(reverseNumber(149)); // Output: 941
console.log(reverseNumber(987654321)); // Output: 123456789
