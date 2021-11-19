// Bubble Sort Algorithm in JavaScript 

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; 
    }
  }
  return array;
}

// Create an array for testing
var array = [59, 5, 9, 46, 2];

// Call the function passing in your array
bubbleSort(array);

// Output results
console.log('The array is now sorted: ');

console.log('\nOutput in yellow-color numbers: ');
for(let i=0; i < array.length; i++){
  console.log(typeof(array[i]), array[i]); // number output
}

console.log('\nOutput in default-color numbers: ');
for(let i=0; i < array.length; i++){
  console.log(typeof(array[i]), '' + array[i]); // concatenate/str output 
}