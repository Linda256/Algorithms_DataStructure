var swap =require("./swap.js");

const InsertionSort = function(arr){
  //loop through arr start with index 1;
  //   curr index = i;
  //   prev index = i-1;
  //    while prev !== null and current item < previous item
  //       prev=prev -1
  //    if curr item < prev item
  //       swap curr and prev;
  //    return arr;
  for (let i=1; i<arr.length; i++){
    let curr =i;
    let prev = i-1;
    while ( arr[curr] < arr[prev]){
      swap(curr, prev, arr)
      curr=prev;
      if (prev===0) break;
      prev--;
    }
  }
  return arr;
}

let arr = [100,7,8,5,13,4,6];
InsertionSort(arr);
console.log(arr);

//Time complexity:
// Worst: O(n*n) Best: O(n) Average: O(n*n)
//Stable: Yes