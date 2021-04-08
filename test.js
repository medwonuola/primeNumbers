let primeNumbers = [];

for (i = 0; i <= 5; i++) {
    if (i == 0 || i == 1) {
        continue;
    }
    
    if (i == 2) {
        primeNumbers.push(2);
        continue;
    }

    for (j = 0; j < primeNumbers.length; j++) {
        

        if (i % primeNumbers[j] != 0) {
            
            console.log(`i: ${i}, j: ${j}, prime numbers: ${primeNumbers}`);
            console.log(primeNumbers);

            console.log(`i % primeNumbers[j] ${i % primeNumbers[j]}`);

            primeNumbers.push(i);
        }
    }
}

console.log(primeNumbers);
