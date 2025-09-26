function reverseString(str) {
    if (typeof str !== 'string') {
        throw new TypeError('revesrseString expects a string arguments');
    }
    return str.split('').reverse().join('')
}

console.log(reverseString("hello"));
console.log(reverseString("12345"));
console.log(reverseString(""));