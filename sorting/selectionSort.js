function selectionSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[lowest] > array[j]) {
                lowest = j;
            }

        }
        if (lowest !== i) {
            swapValues(array, i, lowest);
        }
    }

    return array;
}


function swapValues(arr, idx1, idx2) {

    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];


}

