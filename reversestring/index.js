
//Method 1
const reverse1 = (str) => {
    let newStr = '';
    for(let character of str) {
        newStr = character + newStr
    }
    return newStr
} 

console.log(reverse1('aejaz'));

//Method 2
const reverse2 = (str) => {
   return str.split('').reverse().join('')
} 

console.log(reverse2('aejaz'));

//Method 3
const reverse3 = (str) => str.split('').reduce((rev, char) => char + rev, '') 
 
 console.log(reverse3('aejaz'));
