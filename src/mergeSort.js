function merge (arr1, arr2) {
    if (!arr1.length && !arr2.length){
        return [];
    }
    else if (!arr1.length && arr2.length){
        return arr2;
    }
    else if (arr1.length && !arr2.length){
        return arr1;
    }
    else if (arr1[0] < arr2[0]){
        return [arr1[0]].concat(merge(arr1.slice(1), arr2));
    }
    else {
        return [arr2[0]].concat(merge(arr1, arr2.slice(1)));
    }
}

function mergeSort (arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);

    return merge(mergeSort(arr1), mergeSort(arr2));
}

export {mergeSort}