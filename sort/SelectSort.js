const selectSort = function(arr){
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

function swap(i,j,arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [7,8,5,13,4,6];
selectSort(arr);
console.log(arr);