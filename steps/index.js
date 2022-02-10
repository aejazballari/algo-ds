// Method 1

const steps1 = (n) => {
    for(let i=1; i<=n; i++) {
        let result = ''
        for(let j=1; j<=n; j++ ) {
           if(j<=i) {
               result += '#'
           } else {
               result += " "
           }
        }
        console.log(result);
    }
}

console.log(steps1(7));

// Method 2

const steps2 = (n, rows=0, stair='') => {
    if(n === rows) {
        return
    }

    if(stair.length === n ) {
        console.log(stair);
        return steps2(n, rows+1)

    }
    if(stair.length <= rows) {
        stair += '#'
    } else {
        stair += ' '
    }
    steps2(n, rows, stair)
}

console.log(steps2(7));