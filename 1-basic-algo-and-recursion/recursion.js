function fabonacci (n) {
    if ( typeof n !== 'number' ) { console.log('pls pass the value of number type!!!'); return false; }
    if ( n < 0 ) { console.log('pls do not pass the negative value!!!'); return false; }
    if ( n === 0 ) return 0;
    if ( n === 1 ) return 1;
    return fabonacci(n-1) + fabonacci(n-2);
} 

console.log();
console.log('=== recursive version fabonacci ===');
console.log(fabonacci('sddfsggdf'));
console.log(fabonacci(-1));
console.log(fabonacci(0));
console.log(fabonacci(1));
console.log(fabonacci(2));
console.log(fabonacci(10));


function factorial (n) {
    if ( typeof n !== 'number' ) { console.log('pls pass the value of number type!!!'); return false; }
    if ( n < 0 ) { console.log('pls do not pass the negative value!!!'); return false; }
    if ( n === 0 || n === 1 ) return 1;
    return n * factorial(n-1);
}

console.log();
console.log('=== recursive version factorial ===');
console.log(factorial('sddfsggdf'));
console.log(factorial(-1));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));


function forVersionFactorial (n) {
    if ( typeof n !== 'number' ) { console.log('pls pass the value of number type!!!'); return false; }
    if ( n < 0 ) { console.log('pls do not pass the negative value!!!'); return false; }
    if ( n === 0 || n === 1 ) return 1;
    let result = 1;
    for ( let i = 2; i<=n; i++ ) {
        result *= i;
    }
    return result;
}

console.log();
console.log('=== for version factorial ===');
console.log(forVersionFactorial('sddfsggdf'));
console.log(forVersionFactorial(-1));
console.log(forVersionFactorial(0));
console.log(forVersionFactorial(1));
console.log(forVersionFactorial(2));
console.log(forVersionFactorial(5));



