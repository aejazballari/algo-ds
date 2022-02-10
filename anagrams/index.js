// Method 1
const anagram1 = (str1, str2) => {
    let uStr1 = charMap(str1);
    let uStr2 = charMap(str2)
    if(Object.keys(uStr1).length === Object.keys(uStr2).length) {
        for(let char in uStr1) {
            if(uStr1[char] !== uStr2[char]) {
                return false
            }
            return true
        }
    }
    return false
}

const charMap = (str) => {
    let uStr = str.replace(/[^\w]/g, '').toLowerCase()
    let obj = {}
    for(let char of uStr) {
        // if(obj[char]) {
        //     obj[char] += 1
        // } else {
        //     obj[char] = 1
        // }
        obj[char] = obj[char] + 1 || 1
    }
    return obj
}

console.log(anagram1('RAIL@ SAFETY!', 'fairy tales'));

// Method 2

const anagram2 = (str1, str2) => {
    return str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') === str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

console.log(anagram2('RAIL@ SAFETY!', 'fairy tales'));
