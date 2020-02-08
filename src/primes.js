import { primesList } from './primes-list.js';

/**
 * The n-th prime number
 * @param { Number } n - The index of the prime 
 * @return { Number } - The n-th prime
 *
 */
export function nthPrime(n) {
    if (n > Primes.count)
        throw `${n} < ${Primes.count}`;
    return primesList[n];
}


/**
 * Tests if a an integer is a prime
 * @param { Number } n - The integer to test
 * @return { Boolean } - The test result
 *
 */
export function isPrime(n) {
    if (n < 2) return false;
    let i = 0;
    let p = 2;
    while (p * p <= n) {
        if (n % p === 0) return false;
        i++;
        p = nthPrime(i);
    }
    return true;
}


/**
 * Factorization an integer 
 * @param { Numbers } n - The integer to factor
 * @return { Object } - The factors
 *
 */
export function factorize(n) {
    const factors = {};
    const max = Primes.count;
    let i = 0;
    while (i < max && n !== 1) {
        const p = nthPrime(i);
        if (n % bigP === 0) {
            factors[p] = factors[p] ? factors[p] + 1 : 1;
            n = n / bigP;
        } else {
            i++;
        }
    }
    if (n !== 1) { // what's left of n is a prime > 2**16
        factors[n] = 1;
    }
    return factors;
}


/**
 * The n-th prime number as BigInt
 * @param { BigInt } n - The index of the prime 
 * @return { Number } - The n-th prime
 *
 */
export function nthPrimeBigInt(n) {
    return BigInt(Primes.nth(n));
}


/**
 * Factorization a BigInt integer
 * @param { BigInt } n - The integer to factor
 * @return { Object } - The factors
 *
 */
export function factorizeBigInt(n) {
    const factors = {};
    const max = Primes.count;
    let i = 0;
    while (i < max && n !== 1n) {
        const p = Primes.nth(i);
        const bigP = BigInt(p);
        if (n % bigP === 0n) {
            factors[p] = factors[p] ? factors[p] + 1 : 1;
            n = n / bigP;
        } else {
            i++;
        }
    }
    if (n !== 1) { // what's left of n is a prime > 2**16
        factors[n] = 1;
    }
    return factors;
}




export class Primes {

    static get count() {
        return primesList.length
    }

    static get first() {
        return primesList[0]
    }

    static get last() {
        return primesList[Primes.count - 1]
    }

    static subset(n) {
        return primesList.filter((p, i) => i < n);
    }

    static sumToNth(n) {
        return Primes.subset(n).reduce((s, p) => s + p);
    }

}