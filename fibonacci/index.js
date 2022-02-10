const memoize = (fn) => {
    const cache = {};
    
    return function (...args) {
        if(cache[args]) {
            console.log(cache[args]);
            return cache[args]
        }
        const results = fn.apply(this, args);
        cache[args]=results;
        console.log(cache);
        return results
    }
}


const fibonacci = (n) => {
    if(n<2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

const fib = memoize(fibonacci)

console.log(fib(50));