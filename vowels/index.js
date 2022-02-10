// Method 1

const vowels1 = (str) => {
    let count = 0;
    for(let i of str.toLowerCase()) {
        if(i==='a' || i==='e' || i === 'i' || i === 'o' || i === 'u') {
            count++
        }
    }
    return count
}

console.log(vowels1('hello aejaz'));

// Method 2

const vowels2 = (str) => {
    const match = str.match(/[aeiou]/gi)
    return match ? match.length : 0
}
console.log(vowels2('aejaz'));
