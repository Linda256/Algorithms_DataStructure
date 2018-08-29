let swap = require('./swap.js')

const SelectionSort = function(arr){
  let currI= 0;
  for (let i=1;i<arr.length; i++){
    let minI = i;
    //search the temporary item(tmin) from i
    for (let j=i+1; j<arr.length; j++){
      if (arr[j]<arr[minI]){
        minI=j;
      }
    }
    if (arr[currI]>arr[minI]) swap(currI,minI,arr);
    currI = i;
  }

  return arr;
}
let arr = [7,80,5,13,4,6];
SelectionSort(arr);
console.log(arr);

//Time complexity:
// Worst: O(n*n) Best: O(n*n) Average: O(n*n)
//Stable: No