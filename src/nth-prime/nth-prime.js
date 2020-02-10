import { countPrimes } from '../prime-counting/prime-counting.js'



/**
 * The n-th prime number. Note, nthPrime(1) == 2.
 * @param { BigInt } n - The index of the prime. 
 * @return { BigInt } - The n-th prime.
 *
 */
export function nthPrime(n) {
    const min = n * log10(n) // rough lower limit
    const max = n * ( log2(n) + 100 ) // very rough upper limit
    let searchResult = binarySearch(n, min, max)
    while (countPrimes(searchResult) === countPrimes(searchResult - 1)) 
    	searchResult--; // TODO: Do binary search here
    return searchResult
}

function binarySearch(n, min, max) {
    while (true) {
        const minCount = countPrimes(min)
        const maxCount = countPrimes(max)
        if (n == minCount) return min
        if (n == maxCount) return max
        const mid = Math.round((min + max) / 2)
        const midCount = countPrimes(mid)

        if (n > midCount) {
            min = mid
        } else {
            max = mid
        }
    }
}


function log2(n) {
    const bits = Math.round(n.toString(16).length / 2)
    return bits
}

function log10(n) {
    const digits = n.toString().length - 1
    return digits
}

// TODO: adapt to BigInt
// TODO: check for Number.MAX_SAFE_INTEGER
// TODO: make it work for bigger numbers. Binary search searchResult?