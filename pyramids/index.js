
// Method 1
const pyramids1 = (n) => {
    const midpoint = Math.floor((2*n -1)/2)
    console.log(midpoint);
    for(let i =0;i<n;i++) {
        let result = ''
        for(let j =0; j<2*n-1; j++) {
        if(midpoint-i <= j && midpoint+i >= j) {
            result += '#'
        } else {
            result += ' '
        }
        }
        console.log(result);
    }
}

console.log(pyramids1(2));

// Method 2
const pyramids2 = (n, rows=0, stair='') => {
    if(n===rows) {
        return
    }
    const mid = Math.floor((2*n-1)/2)
    if(stair.length === 2*n-1) {
        console.log(stair);
        return pyramids2(n, rows+1)
    }
    if(mid-rows <= stair.length && mid+rows >= stair.length) {
        stair += '#'
    } else {
        stair += ' '
    }
    pyramids2(n, rows, stair)
}

console.log(pyramids2(4));