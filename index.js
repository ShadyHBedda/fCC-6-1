function isPrime(potentialPrime) {
    if (potentialPrime <= 1) {
        return false;
    }

    for (let i = 2; i**2 <= potentialPrime; i++) {
        if (potentialPrime % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isPrime,
}