const maxchar = (str) => {
    let obj = {}
    let num = 1
    let maxChar = ''
    for(let char of str) {
        obj[char] = obj[char] + 1 || 1
    }
    for(let ele in obj) {
        if(obj[ele] > num) {
            num = obj[ele]
            maxChar = ele 
        }
    }
    
    return maxChar
}

console.log(maxchar('abbbbc1111111'));