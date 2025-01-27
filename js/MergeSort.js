// takes array as input, uses bubblesort to sort array
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question(">>Enter array, using spaces to separate values (e.g. 1 2 3): ", function(inputString) {
   sort(inputString);
   rl.close();
});

function sort(inputString) {
    let arrUnsorted = inputString.split(" ");
    
    function merge(leftArr, rightArr) {
        let i = 0;
        let j = 0;
        let mergedArr = [];

        // sort vals
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] < rightArr[j]) {
                mergedArr.push(leftArr[i]);
                i++;
            } else {
                mergedArr.push(rightArr[j]);
                j++;
            }
        }

        // copy any remaining elements in
        while (i < leftArr.length) {
            mergedArr.push(leftArr[i]);
            i++;
        }

        while (j < rightArr.length) {
            mergedArr.push(rightArr[j]);
            j++;
        }

        return mergedArr;
    }

    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
    
        let midpoint = Math.floor(arr.length / 2);
        // js arr.slice (leftIndex, rightIndex) includes left index, excludes right index
        let leftArr = mergeSort(arr.slice(0, midpoint));
        let rightArr = mergeSort(arr.slice(midpoint));
    
        return merge(leftArr, rightArr);
    }

    let arrSorted = mergeSort(arrUnsorted);
    console.log(arrSorted.toString());
}