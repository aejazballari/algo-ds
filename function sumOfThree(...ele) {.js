function sumOfThree(...ele) {
    return new Promise((resolve, reject) => {
        if(ele.length > 3) {
            reject('only three elements or less are allowed')
        } else {
            let sum =0
            let i =0
            while(i< ele.length) {
                sum += ele[i]
                i++
            }
            resolve('Sum has been calculated: ' + sum )
        }
    }) 
}

sumOfThree(1,2)
.then(data=> console.log(data))
.catch(err=> console.log(err))

const text = ' aejaz ahmed ' 

console.log(text.toLowerCase().startsWith('aejaz'));




var a= 7;
var b= 10;
 function demoFunc(){ return demo(a,b) + ex();
}
function demo(x,y){
return (x + y)
}
function ex(){
let a = 1; let b= 2;
return a+b;
}

console.log(demoFunc());

// var date = new Date('june 31, 2020 06:30:30')
// var fetcdata = date.toJSON()
// console.log(fetcdata.split('-')[1]);

// var choice = "E"
// switch (choice) {
//     default:
//         console.log("others");
//     case "A":
//         console.log("A");
//     case "B": 
//         console.log("B");
//         break
//     case "C":
//       console.log("C");      
// }

// if(choice = 'E') console.log("E");

// let num = 10;
// function func() {
//     num = 100
//     return
// }
// func()
// console.log(num);

// string reverse

const strReverse1 = (str) => {
    let newStr = ''
    // for(let i = str.length-1; i>=0; i--) {
    //     newStr += str[i]
    // }
    for(let char of str) {
        if(char === '') return
        newStr = char + newStr
    }
    return newStr
    // return str.split('').reduce((acc, itr) => itr+acc, '')
}

console.log(strReverse1('aejaz ahmed'));


// palindrome
const palindrome = (str) => {
    // let len = str.length-1
    // for(let i=0; i<=len/2; i++) {
    //     if(str[i] !== str[str.length-1-i])  {
    //        return false
    //     } 
    // }
    // return true
    let reverse = str.split('').reverse().join('');

    // if(str !== reverse) {
    //     return false
    // }
    // return true
    return reverse === str
}

console.log(palindrome('racecar'));

// Factorial

const factorial = (n) => {
    if(n===1 || n ===0) {
        return n
    }
    // return n * factorial(n-1)
    let fact = 1
    for(let i = n; i>1; i--) {
        fact =  fact * i
    }
    return fact
}

console.log(factorial(5));

//Fizzbuzz

const fizzbuzz = (n) => {
    for(let i=0; i<=n; i++) {
        if(i%3 ===0 && i%5===0) {
            console.log('fizzbuzz');
        } else if(i%3===0) {
            console.log("fizz");
        } else if(i%5===0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

console.log(fizzbuzz(5));

//max chars

const maxchar = (str) => {
    const newStr = str.replace(/[^\w]/g, '')
    const obj = {}
    let character = []
    let max = 1
    for(let char of newStr) {
        obj[char] = obj[char]+1 || 1
    }
    for(let char in obj) {
        if(obj[char]>max) {
            max = obj[char]
            // character = char 
        }
    }
    for(let char in obj) {
        if(obj[char] === max) {
            console.log(char);
            character.push(char)
        }
    }
    return character
}

console.log(maxchar('aaabbbbacccd1111'));

// reverseint

const reverseint = (n) => {
    const sign = Math.sign(n)
    return parseInt(n.toString().split('').reverse().join(''))*sign
}

console.log(reverseint(-122+3));

// fibonacci

// const memoize = (fn) => {
//     let cache = {};
//     return function (...args) {
//         if(cache[args]) {
//             console.log(cache[args]);
//             return cache[args]
//         }
//         const results = fn.apply(this, args)
//         cache[args] = results;
//         return results
//     }
// }

// const fibonacci = (n) => {
//     // let n1=0, n2=1, nextTerm;
//     // for(let i=1; i<=n; i++) {
//     //      nextTerm = n1 + n2
//     //      n1=n2;
//     //      n2=nextTerm
//     //      console.log(n1);
//     // }
//     if(n<2) {
//         return n
//     }
//     return mem(n-1) + mem(n-2) 
//  }
 
//  const mem = memoize(fibonacci)
//  console.log(mem(100));

// console.log(fibonacci());

const results = {};

function fib(n) {
    if(n<=1) {
        return n
    }
    if(n in results) {
        return results[n]
    } else {
        results[n] = fib(n-1) + fib(n-2)
    }
    return results[n]
}

console.log(fib(1476));

const deepCopy = (obj) => {
    let value;
    if(typeof obj !== "object" || obj === null) {
        return obj
    }
    const newObj = Array.isArray(obj) ? [] : {}
    for(let key in obj) {
        value = obj[key]
        newObj[key] = deepCopy(value)
    }
    return newObj
}

// comparing two object values

const compare = (obj1, obj2) => {
    const obj1keys = Object.keys(obj1)
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    console.log(obj1keys);
    for(let key of obj1keys) {
        console.log(key);
        if(obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}

let person = {
    name: 'aejaz',
    siblings: "ahmed",
    city: "anantapur"
}

let person2 = {
    name: 'aejaz',
    siblings: 'ahmed',
    city: "anantapur"
}

console.log(compare(person, person2));

const capitalize = (str) => {
    let result = str[0].toUpperCase();
    for(let i=1; i<=str.length-1; i++) {
        if(str[i-1]== ' ') {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
    return result;
}

console.log(capitalize('live your day as your last'));

// class Person {
//     constructor(name, number) {
//         this.name = name,
//         this.number = number
//     }

//     details(name, number) {
//         return `my name is ${name || this.name} and number is ${number || this.number}`
//     }
// }

function Person(name, number) {
    this.name = name,
    this.number = number
}
const perso = new Person('aejaz', 9440659301)
Person.prototype.details = function () {
    return `my name is ${this.name} and number is ${this.number}`
}
console.log(perso.details('ahmed'));

function getDetail(message = '') {
    return "hello " + this.name + ' ' + message
}

const obj = {name: 'aejaz'};

console.log(getDetail.call(obj, 'ahmed'));

function sumOfThreeElements (...elements) {
    return new Promise((resolve, reject) => {
        if(elements.length >3) {
            reject('Only three elements or less are allowed')
        } else {
            let sum = 0;
            let i = 0;
            while(i<elements.length) {
                sum += elements[i];
                i++
            }
            resolve("sum is" + sum)
        }
    })
}

console.log(sumOfThreeElements(1,2,3).then(data => console.log(data)));

function* genFunc(){
    yield 3;
    yield 4;
    return 'completed'
  }
 const gen = genFunc()
 console.log( gen.next());
 console.log( gen.next());
 console.log( gen.next());
