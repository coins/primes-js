import { primalityTest } from './primality-test.js'

describe('The function "primalityTest"', function() {

    it('returns true for most primes', function() {

        expect(primalityTest(32416187567)).toBeTrue()
        expect(primalityTest(32416188223)).toBeTrue()
        expect(primalityTest(32416188809)).toBeTrue()
        expect(primalityTest(32416189391)).toBeTrue()

        expect(primalityTest(32416187627)).toBeTrue()
        expect(primalityTest(32416188227)).toBeTrue()
        expect(primalityTest(32416188839)).toBeTrue()
        expect(primalityTest(32416189459)).toBeTrue()

        expect(primalityTest(32416187651)).toBeTrue()
        expect(primalityTest(32416188241)).toBeTrue()
        expect(primalityTest(32416188859)).toBeTrue()
        expect(primalityTest(32416189469)).toBeTrue()

    })


    it('returns false for every composite', function() {

        expect(primalityTest(32416187567 + 1)).toBeFalse()
        expect(primalityTest(32416188223 + 1)).toBeFalse()
        expect(primalityTest(32416188809 + 1)).toBeFalse()
        expect(primalityTest(32416189391 + 1)).toBeFalse()

        expect(primalityTest(32416187627 + 1)).toBeFalse()
        expect(primalityTest(32416188227 + 1)).toBeFalse()
        expect(primalityTest(32416188839 + 1)).toBeFalse()
        expect(primalityTest(32416189459 + 1)).toBeFalse()

        expect(primalityTest(32416187651 + 1)).toBeFalse()
        expect(primalityTest(32416188241 + 1)).toBeFalse()
        expect(primalityTest(32416188859 + 1)).toBeFalse()
        expect(primalityTest(32416189469 + 1)).toBeFalse()

    })

})