import {mod_exp} from '../../../numbers-js/numbers.js'

/**
 * Performs a stochastic primality test
 * @param {BigInt} n The number to test
 * @return {boolean} result of the test
 *
 */
export function primalityTest(n) {
    n = BigInt(n)
    if (isComposite_1(n)) return false;
    const A = [5040n, 30n, 12n, 11n, 7n, 6n, 5n, 3n, 2n]
    
    let isPrime = false
    A.forEach(a => {
        if (a >= n) return
        const w = isComposite_2(n, a)
        if (w === false) return false
        if (w === true) isPrime = true
    })
    return isPrime
}


/**
 * Performs a stochastic primality test given base a
 *
 *
 */
function isComposite_2(n, a) {
    const y = mod_exp(a, (n - 1n) / 2n, n)
    const modulus = y + 1n == n
    const isProbablyPrime = modulus ? true : (y == 1n ? undefined : false)
    return isProbablyPrime
}

/**
 * Performs a stochastic primality test given base a
 *
 *
 */
function isComposite_1(x) {
    const mod30 = x % 30n;
    return !(mod30 === 1n || mod30 === 7n || mod30 === 11n || mod30 === 13n || mod30 === 17n || mod30 === 19n || mod30 === 23n || mod30 === 29n);
}