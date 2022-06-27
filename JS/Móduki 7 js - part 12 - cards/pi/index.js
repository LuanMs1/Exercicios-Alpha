const precision = BigInt(10**100);

function factorial(n){
    n = BigInt(n);
    if(n == 0n){
        return 1n;
    }
    return n * factorial(n - 1n);
}

// let pi = (3n * precision) / 4n;
// for (let i = 0; i < 1000; i++){
//     i = BigInt(i);
//     let denominator = (2n*i + 3n) ** 3n - (2n*i + 3n);
//     let sine = (-1n) ** i;
//     pi += (sine * precision) / denominator;
// }

// pi *= 4n;

// console.log(pi);


//second series

pi = 0n;
for (let i = 0; i < 1000; i++){
    i = BigInt(i)
    let numerator = (5n * i + 3n) * factorial(i) * factorial(2n*i);
    let denominator;
    if (i == 0){        
        denominator = factorial(3n * i + 2n) / 2n;
    }else {       
        denominator = 2n ** (i - 1n) * factorial(3n * i + 2n);
    }
    pi += precision*numerator/denominator;
}

console.log(pi);