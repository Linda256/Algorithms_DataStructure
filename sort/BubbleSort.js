const BubbleSort = function(arr){
  // loop through the arr
      // curr = i;
      //compare current item and its previous item
      //  while curr < prev
      //         swap curr and prev.
      //         curr = prev
  for (let i=1; i< arr.length; i++){
    let curr = i;
    while (curr-1 !== null && arr[curr] < arr[curr-1]){
      swap(curr,curr-1,arr);
      curr=curr-1;
    }
  }
  return arr;
}

function swap(i,j,arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [7,8,5,13,4,6];
BubbleSort(arr);
console.log(arr);

//Time complexity:
// Worst Case: O(n*n) Best: O(n) Average: O(n*n)
//Stable: Yes