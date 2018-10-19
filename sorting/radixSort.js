function radixSort(arrayOfNumbers) {

    const maxDigits = maxDigitsCount(arrayOfNumbers);
    for (let pass = 0; pass < maxDigits; pass++) { 

        let buckets = Array.from({  
            length: 10
        }, () => []);
        for (let index = 0; index < arrayOfNumbers.length; index++) {

            let digit = digitAt(arrayOfNumbers[index], pass);            
            buckets[digit].push(arrayOfNumbers[index]);

        }

        arrayOfNumbers = [].concat(...buckets); 

    }

    return arrayOfNumbers;
}




/* Helper function to return the digit at a specified position from right  in a number
     Examples,  digitAt(1325, 0) => 5
                digitAt(67, 3)=> 0 , as there is no digit at position 3 */

function digitAt(number, position) {

    //convert number into an array
    const numArray = number.toString().split('');

    //if there is no digit at specified position return 0
    return +numArray[numArray.length - position - 1] || 0;
}

// ****************************************************************
/*Helper function to count the digits 
   Examples, countDigits(1234)=>4
             countDigits(0)=> 1
             countDigits(-354)=>3 */

function countDigits(number) {

    if (number === 0)
        return 1;
    return Math.abs(number).toString().length;
}

// *****************************************************************
/*Helper function to get maximum digits count in an array of numbers
    Example, maxDigitsCount([123,5647,-567,0]) => 4 (max digits in 5647)
             maxDigitsCount([-12345,98,0,2,123])=> 5 (max digits in -12345)
*/

function maxDigitsCount(arrayOfNums){

    const digitsOfNumbers= arrayOfNums.map((num) => countDigits(num));
    return Math.max(...digitsOfNumbers);
}

