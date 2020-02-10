import { countPrimes } from './prime-counting.js'

describe('The function "countPrimes"', function() {

    it('counts the number of primes up to n', function() {
        expect(countPrimes(10 ** 2)).toBe(25)
        expect(countPrimes(10 ** 3)).toBe(168)
        expect(countPrimes(10 ** 4)).toBe(1229)
        expect(countPrimes(10 ** 5)).toBe(9592)
        expect(countPrimes(10 ** 6)).toBe(78498)
        expect(countPrimes(10 ** 7)).toBe(664579)
    })

})