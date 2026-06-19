// Both fib functions return an array of n fibonacci numbers

function fibs (n) {
    let result = [0, 1];
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    while (result.length != n){
        result.push(result.at(-2) + result.at(-1));
    }
    return result;
}

function fibsRec (n) {

}



export {fibs, fibsRec}