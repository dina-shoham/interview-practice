// takes array as input, uses bubblesort to sort array
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(">>Enter array, using spaces to separate values (e.g. 1 2 3 2 1): ", function(inputString) {
   lonelyinteger(inputString);
   rl.close();
});

function lonelyinteger(a) {
    // Write your code here
    function contains(arr, el) {
        let contains = false;
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] === el) {
                contains = true;
            }
        }
        return contains;
    }
    
    let i = 0;
    let hasDup;
    let existingInts = [];
    
    while (i < a.length) {
        hasDup = false;
        // see if we've already checked this val
        if (contains(existingInts, a[i])) {
            i++;
        // if not, check the rest of the array
        } else {
            for (let j = i + 1; j < a.length; j++) {
                if (a[j] === a[i]) {
                    hasDup = true;
                    existingInts.push(a[i]);
                    break;
                }
            }
            if (!hasDup) {
                break;
            }            
            i++;
        }
        
    }
    console.log(a[i]);
}