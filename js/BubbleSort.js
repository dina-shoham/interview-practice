// takes array as input, uses bubblesort to sort array
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question(">>Enter array, using spaces to separate values (e.g. 1 2 3): ", function(inputString) {
   bubbleSort(inputString);
   rl.close();
});

function bubbleSort(inputString) {
    arr = inputString.split(" ");

    let i, j, swap, swapped;
    let n = arr.length;

    for (i = 0; i < n-1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap = arr[j + 1];
                arr[j + 1] = arr [j];
                arr[j] = swap;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }

    console.log(arr.toString());
}