const binarySearch = require ('./binarySearch.js');

let sorted = [1,2,7,14,18,29,43];

test('binarySearch is a function',()=>{
  expect(typeof binarySearch).toBe('function');
})

test('binarySearch return a number', () =>{
  expect(typeof binarySearch(sorted)).toBe('number');
})

test('Find 7 in sorted should return 2', ()=>{
  expect(binarySearch(sorted,7)).toBe(2);
})

test('Find 8 in sorted should return -1', ()=>{
  expect(binarySearch(sorted,8)).toBe(-1);
})