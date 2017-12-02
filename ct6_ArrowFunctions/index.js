let inputs = process.argv.slice(2);

//console.log(inputs);



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// var new_array = arr.map(function callback(currentValue, index, array) {
//     // Return element for new_array
// }[, thisArg])

let new_output = []

// let new_array = inputs.map(function callback(input, inputs) { 
//  let a = input.slice(0, 1)
//  console.log(a)
//  new_output.push(a)
// //return new_output
// })

let new_array = inputs.map((input, inputs)=>{ 
let a = input.slice(0, 1)
new_output.push(a)

})





//console.log(new_output.join(''))



let text = `[${inputs}] becomes "${new_output.join('')}"`

console.log(text);




//   var inputs = process.argv.slice(2);
//     var result = inputs.map(/* what goes here? */)
//                         .reduce( what goes here? );

// So an input of ["Hello", "arrow", "functions"] would become "Haf".

//  [Hello,arrow,functions] becomes "Haf"