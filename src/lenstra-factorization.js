import { assert } from '../utils.js'
import { _FQ } from '../fields/field_elements.js'
import { CurvePoint } from '../curves/ec.js'



export function factor(n) {
    console.log('Factorizing', n)
    class FQ extends _FQ {
        static get modulus() {
            return n
        }
    }

    let k = 1n;
    for (let i = 1n; i < 100n; i++) {
        k *= i
    }
    console.log('k=', k)

    for (var i = -100; i < 100; i++) {
        if (i === -2) continue

        class TestCurve extends CurvePoint {

            static get a() {
                return new FQ(i)
            }

            static get b() {
                return new FQ(1)
            }

            static get G() {
                return new TestCurve(
                    new FQ(0),
                    new FQ(1)
                )
            }
        }
        // TestCurve.constructor.a=i
        try {
            TestCurve.G.multiply(k)
        } catch (e) {
            console.log('Found curve:', i, e)
            return
        }
    }
    console.log('Nothing found')

}