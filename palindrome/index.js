
//Method 1
const palindrome1 = (str) => {
    let reverse = str.split('').reverse().join('')
    return str === reverse
}

console.log(palindrome1('abbas'));

//Method 2
const palindrome2 = (str) => {
    return str.split('').every((char, index) => {
        return char === str[str.length-1 - index]
    });
}

console.log(palindrome2('abba'));