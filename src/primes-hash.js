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



((async _ => {
	const l = await hashToPrime(randomBytes(32));
	debugger;
})())


