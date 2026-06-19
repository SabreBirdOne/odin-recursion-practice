import { fibs, fibsRec } from "./fibonacci";

function fib8 (fn){
    const result = fn(8);
    expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
}

function fib0 (fn){
    const result = fn(0);
    expect(result).toEqual([]);
}

function fib1 (fn){
    const result = fn(1);
    expect(result).toEqual([0]);
}

function fib2 (fn){
    const result = fn(2);
    expect(result).toEqual([0, 1]);
}

function fib3 (fn){
    const result = fn(3);
    expect(result).toEqual([0, 1, 1]);
}

for (const fibFn of [fibs, fibsRec]){
    for (const testCase of [fib0, fib1, fib2, fib8]){
        test(`Testing ${fibFn.name} with scenario ${testCase.name}`, 
            () => {testCase(fibFn)}
        )
    }
}