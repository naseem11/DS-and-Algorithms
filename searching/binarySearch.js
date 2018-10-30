function binarySearch(sortedArray, value) {
    let start = 0;
    let end = sortedArray.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (sortedArray[mid] !== value && start <= end) {

        if (value < sortedArray[mid])
            end = mid - 1;
        else
            start = mid + 1;

        mid = Math.floor((start + end) / 2);
    }
    if (value === sortedArray[mid])
        return mid;

    return -1;
}

/*  Time Complexity -->  Best case --> O(1)  ,  Average and Worst case --> O(log n)
    ----------------
*/