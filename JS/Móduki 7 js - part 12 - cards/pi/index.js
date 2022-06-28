const precision = BigInt(10**100);
memo = {
    0:1n,
};
function factorialCalculate(n){
    n = BigInt(n);
    if (n in memo){
        return memo[n];
    }
    return n * factorialCalculate(n - 1n);
}

function factorial(n){
    n = BigInt(n);
    if (n in memo){
        return memo[n]
    }
    memo[n] = factorialCalculate(n);
    return memo[n];

}

function performance(start){
    return Date.now() - start;
}




//converge rápido pra um valor impreciso
function nilakhantaFat(terms){
    const start = Date.now();
    let pi = 0n;
    let piBefore = pi;
    for (let i = 0; i < terms; i++){
        i = BigInt(i)
        let numerator = (5n * i + 3n) * factorial(i) * factorial(2n*i);
        let denominator;
        if (i == 0){        
            denominator = factorial(3n * i + 2n) / 2n;
        }else {
            denominator = 2n ** (i - 1n) * factorial(3n * i + 2n);
        }
        piBefore = pi;
        pi += precision*numerator/denominator;
        if (pi == piBefore){
            console.log(i);
            console.log(pi);   
            console.log('duration: ');
            console.log(performance(start));
            return;
        }
    }
     
}

// demora a convergir e acaba por ter menos precisão que a equação acima.
function nilakhanta(terms){    
    const start = Date.now();
    let pi = (3n * precision) / 4n;
    let piBefore = pi;
    for (let i = 0; i < terms; i++){
        i = BigInt(i);
        let denominator = (2n*i + 3n) ** 3n - (2n*i + 3n);
        let sine = (-1n) ** i;
        piBefore = pi;
        pi += (sine * precision) / denominator;
        if (piBefore == pi){
            console.log(i);
            console.log(pi);   
            console.log('duration: ');
            console.log(performance(start));

        }
    }

    pi *= 4n;
    console.log('pi:')
    console.log(pi);
    return pi;
}