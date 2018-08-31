/**
* @parameter {array} a sorted array, sorted
* @ return {number}
*/
var binarySearch = function(sorted, target){
  let lo = 0;
  let hi  = sorted.length-1;
  while(lo<=hi){
    let mid = Math.floor(lo+(hi-lo)/2);
    if (sorted[mid]===target) return mid;
    if (sorted[mid] < target) lo = mid+1;
    else hi = mid-1;
  }
  return -1;
}

module.exports = binarySearch;