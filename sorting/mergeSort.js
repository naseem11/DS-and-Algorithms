

function mergeSort(inputArray) {
    if (inputArray.length <= 1)
        return inputArray;
    let midPoint = Math.floor(inputArray.length / 2);
    let leftArray = inputArray.slice(0, midPoint);
    let rightArray = inputArray.slice(midPoint);
    return merge(mergeSort(leftArray), mergeSort(rightArray));

}



/*Helper function to merge two SORTED arrays into one sorted arrays
    Example, merge([1,4,6],[0,3,9,78])=> [0,1,3,4,6,9,78] */

function merge(sortedArr1, sortedArr2) {

    const resultArray = [];
    let i = 0,
        j = 0;
    //match elements at index i in sortedArr1 and at index j in sortedArr2 , push the smaller value into the    resultArray and move to the next index.    
    while (i < sortedArr1.length && j < sortedArr2.length) {

        if (sortedArr1[i] < sortedArr2[j]) {
            resultArray.push(sortedArr1[i]);
            i += 1;
        } else {

            resultArray.push(sortedArr2[j]);
            j += 1;
        }


    }
    //if sortedArr1 has not exchausted yet push all the remaining elements into the resultArray.
    while (i < sortedArr1.length) {

        resultArray.push(sortedArr1[i]);
        i += 1;
    }
    //if sortedArr2 has not exchausted yet push all the remaining elements into the resultArray.
    while (j < sortedArr2.length) {

        resultArray.push(sortedArr2[j]);
        j += 1;
    }

    return resultArray;

}

