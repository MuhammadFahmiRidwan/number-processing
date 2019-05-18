// minimum array
function min(arr) {
  return arr.reduce(function (x, y)  {
    return (x < y ? x : y)
  } ) 
}

// maximum array
function max(arr){
  return arr.reduce(function (x, y){
    return (x > y ? x : y)
  } ) 
}

// mean (rata-rata) array
function mean(arr){
  var jumlah = 0
  for (i = 0; i < arr.length; i++){
    jumlah += arr[i]
  }
return jumlah / arr.length
}

// odds array
function odds(arr){
var odds1 = arr.filter (function getodds(m){
  return m % 2 === 1
})
return odds1.join(',')
}

// evens array
function evens(arr){
var even = arr.filter (function getevens(n){
  return n % 2 === 0
})
return even.join(',')
}

function numberProcessing(arr) {
  return 'Min: ' + min(arr) + ', Max: ' + max(arr) + ', Mean: ' + mean(arr) + ', Odds: ' + odds(arr) + ', Evens: ' + evens(arr)
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]))
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"