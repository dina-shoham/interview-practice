// takes array as input, uses bubblesort to sort array
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question(">>Enter array, using spaces to separate values (e.g. 1 2 3): ", function(inputString) {
   BubbleSort(inputString);
   rl.close();
});

function BubbleSort(inputString) {
    arr = inputString.split(" ");

    let i, j, swap;
    let n = arr.length;

    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap = arr[j + 1];
                arr[j + 1] = arr [j];
                arr[j] = swap;
            }
        }
    }

    console.log(arr.toString());
}