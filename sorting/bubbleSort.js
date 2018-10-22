function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let swap = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swapValues(array, j, j + 1);
                swap = true;
            }

        }
        if (!swap) {
            return array;
        }
    }
    return array;
}

function swapValues(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
