import { isPrime, nthPrime, factorize } from './primes.js'

describe('The primes library', function() {

    describe('The function "isPrime"', function() {
        it('returns true for primes', function() {
            expect(isPrime(3)).toBeTrue()
            expect(isPrime(101)).toBeTrue()
            expect(isPrime(8887)).toBeTrue()
        })

        it('returns false for composites', function() {
            expect(isPrime(4)).toBeFalse()
            expect(isPrime(100)).toBeFalse()
            expect(isPrime(1000)).toBeFalse()
        })
    })

    describe('The function "nthPrime"', function() {
        it('returns the n-th prime', function() {
            expect(nthPrime(3)).toBe(7)
            expect(nthPrime(101)).toBe(557)
            expect(nthPrime(8887)).toBe(92003)
        })
    })

    describe('The function "factorize"', function() {
        it('returns an integer\'s factorization', function() {
            expect(factorize(42)).toEqual({ 2: 1, 3: 1, 7: 1 })
            expect(factorize(100)).toEqual({ 2: 2, 5: 2 })
            expect(factorize(8880)).toEqual({ 2: 4, 3: 1, 5: 1, 37: 1 })
        })
    })
})