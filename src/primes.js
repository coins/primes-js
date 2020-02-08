import { primesList } from './primes-list.js';

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

    static nth(n) {
        if (n > Primes.count)
            throw `${n} < ${Primes.count}`;
        return primesList[n];
    }

    static nthBigInt(n) {
        return BigInt(Primes.nth(n));
    }

    static subset(n) {
        return primesList.filter((p, i) => i < n);
    }

    static sumToNth(n) {
        return Primes.subset(n).reduce((s, p) => s + p);
    }

}

export function nthPrime(n) {
    if (n > Primes.count)
        throw `${n} < ${Primes.count}`;
    return primesList[n];
}

export function isPrime(n) {
    if (n < 2) return false;
    let i = 0;
    let p = Primes.first;
    while (p * p <= n) {
        if (n % p === 0) return false;
        i++;
        p = Primes.nth(i);
    }
    return true;
}

// TODO: Implement factorize for Number vs BigInt
export function factorize(n) {
    const factors = {};
    const max = Primes.count;
    let i = 0;
    while (i < max && n !== 1n) {
        const p = Primes.nth(i);
        const bigP = BigInt(p)
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