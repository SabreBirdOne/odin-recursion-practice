import { mergeSort } from "./mergeSort";

testCases = [
    [[], []],
    [[73], [73]],
    [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
    [[3, 2, 1, 13, 8, 5, 0, 1], [0, 1, 1, 2, 3, 5, 8, 13]],
    [[105, 79, 100, 110], [79, 100, 105, 110]]
]

for (const testCase of testCases){
    test(`Testing mergeSort(${testCase[0]})`, ()=>{
        expect(mergeSort(testCase[0])).toEqual(testCase[1])
    })
}