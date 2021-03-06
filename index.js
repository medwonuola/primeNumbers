function isPrime(number) {
    let primeNumbers = [];

    for (i = 0; i <= number; i++) {
        if (i == 0 || i == 1) {
            continue;
        }
        if (primeNumbers.every((number) => i % number != 0)) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers.includes(number);
}