import { Primes } from './primes.js';
import { pow } from './numbers.js';
import { sha256 } from './hash.js';
import { Secp256k1 } from './secp256k1.js';
import { bigIntToBuffer, bufferToBigInt, randomBytes } from './buffer.js';


export async function hashToPrime(buffer) {
    // const hashBuffer = await sha256(buffer)
    const privateKey = bufferToBigInt(randomBytes(32));
    const hash = Secp256k1.G.multiply(privateKey).compress();

    // const hash = bufferToBigInt(hashBuffer);
    return Primes.factorize(hash)
}

function isComposite(x) {
    const mod30 = x % 30n;
    return !(mod30 === 1n || mod30 === 7n || mod30 === 11n || mod30 === 13n || mod30 === 17n || mod30 === 19n || mod30 === 23n || mod30 === 29n);
}

((async _ => {
	const l = await hashToPrime(randomBytes(32));
	debugger;
})())


