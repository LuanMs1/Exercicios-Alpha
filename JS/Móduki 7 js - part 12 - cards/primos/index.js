let primes = [];

//testing for divisibility for all primes
function bruteForce(number){
    if (number == 2){
        return true;
    }
    for (let prime of primes){
        if (number % prime == 0){
            return false;
        }
    }

    return true;
}

for (let number = 2; number < 100000; number++){
    if (bruteForce(number)){
        primes.push(number);
    }
}

console.log(primes);