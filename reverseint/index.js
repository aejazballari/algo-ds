const reverseInt = (n) => {
    let sign = Math.sign(n)
    return parseInt(n.toString().split('').reverse().join('')) * sign
}

console.log(reverseInt(-123));