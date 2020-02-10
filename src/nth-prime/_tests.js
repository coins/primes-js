import { nthPrime } from './nth-prime.js'

// Test vectors: https://primes.utm.edu/lists/small/millions/
describe('The function "nthPrime"', function() {

    it('returns the n-th prime number for n > 1 million', function() {
    	expect(nthPrime(1)).toBe(2)
    	expect(nthPrime(2)).toBe(3)
    	expect(nthPrime(10)).toBe(29)
    	expect(nthPrime(32)).toBe(131)
    	expect(nthPrime(1e6)).toBe(15485863)
    	expect(nthPrime(4e6)).toBe(67867967)
    	// expect(nthPrime(12e6)).toBe(217645199)
    })

})