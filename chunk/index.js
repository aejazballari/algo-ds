
// Method 1
const chunk1 = (arr, n) => {
    let output = []
    for(let i=0; i<=arr.length-1; i = i + n) {
        output.push( arr.slice(i, i+n))
    }
   return output
}

console.log(chunk1([1,2,3,4,5,6,7], 2));

// Method 2
const chunk2 = (arr, n) => {
    const chunked = []
    for(let ele of arr) {
        const last = chunked[chunked.length - 1]
        if(!last || last.length === n) {
            chunked.push([ele])
        } else {
            last.push(ele)
        }
    }
   return chunked
}

console.log(chunk2([1,2,3,4,5,6,7], 2));