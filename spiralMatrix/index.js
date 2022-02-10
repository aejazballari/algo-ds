const matrix = (n) => {
    const results = [];
    for(let i=0; i<n; i++) {
        results.push([])
    }
    let startColumn = 0; 
    let endColumn = n-1;
    let startRow = 0; 
    let endRow = n-1;
    let count = 1;
    while(startColumn <= endColumn && startRow <= endRow) {
    // top row
        for(let i=startColumn; i<=endColumn; i++ ) {
            results[startRow][i] = count;
            count++;
        }
        startRow++;
    // right column
        for(let i=startRow; i<=endRow; i++ ) {
            results[i][endColumn] = count;
            count++
        }
        endColumn--
    // bottom row
        for(let i=endColumn; i>=startColumn; i-- ) {
            results[endRow][i] = count;
            count++
        }
        endRow--
    // left column
        for(let i=endRow; i>=startRow; i-- ) {
            results[i][startColumn] = count;
            count++
        }
        startColumn++
    }
    return results
}

console.log(matrix(4));