var mergeSort = function(arr){
  // Divide array into tow halves
  // Recursively sort each half
  // Merge two halves
  let lo = 0;
  let hi = arr.length-1;
  let aux=[];
  mSort(arr,aux,lo,hi);
  return arr;
}

var merge = function (arr,aux,lo,mid,hi){
  for (let k=lo;k<=hi;k++){
    aux[k] =arr[k];
  }
  let i=lo;
  let j=mid+1;
  for (let k=lo; k<=hi;k++){
    if (i>mid) {
      arr[k] = aux[j];
      j++;
    }
    else if (j>hi) {
      arr[k] = aux[i];
      i++;
    }
    else if(aux[i]>aux[j]) {
      arr[k]=aux[j];
      j++;
    } else{
      arr[k]=aux[i];
      i++
    }
  }
  console.log(arr);
}

var mSort = function(arr,aux,lo, hi){
  if (hi <= lo) return;
  let mid = Math.floor(lo+(hi-lo)/2);
  console.log(mid);
  mSort(arr,aux,lo,mid);
  mSort(arr,aux,mid+1, hi);
  merge(arr,aux,lo,mid,hi);
}

let arr = [7,8,5,13,4,6];
let result = mergeSort(arr);
console.log(result);
