// Method 1

const capitalize1 = (str) => {
    return str.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' ')
}

console.log(capitalize1('hi there, how are you'));

// Method 2

const capitalize2 = (str) => {
    let result = str[0].toUpperCase();
    for(let i =1; i<str.length; i++) {
        if(str[i-1] === ' ') {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
    return result
}

console.log(capitalize2('hi there, how are you'));
