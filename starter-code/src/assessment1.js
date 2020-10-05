// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if(num%2===0){
    console.log(num + "es par")
  }else{
    console.log ("no es par");
  }
}
//let evenNumbers=numbers.filter(function(num)){
 // return num%2===0;
//});
// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a<b){
    console.log(b);
  }else{
    console.log(a);

  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a == b && a == c){
    console.log("Numero 1, Numero 2 y Numero 3 son iguales! y valen: "+a+"");
    }
    else{
      if (a> b){
          if (a > c){
            console.log("Numero 1 es Mayor y vale: " a +"");
             }
             else{
              console.log("Numero 3 es Mayor y vale: "+c+"");
                }
       }
       else{
          if(a < b){
             if (b > c){
              console.log("Numero 2 es Mayor y vale: "+b+"");
                }
                else{
                  console.log("Numero 3 es Mayor y vale: "+c+"");
                   }
             }
          }
    }
}

// Calculate the sum of an array of numbers
let total=arr.reduce(function sumArray(numbers) {
  console.log(numbers)
  return total;
});

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
 return numbers.Math.max()
}

// Return the longest string in an array
function longestString(strings) {
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
if(wordsArr.includes(word)){
  return true;
}else{
  return false;
}
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  for(i=0;i>wordsArr.lenght)
  for()
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + personObj.lastName;
  

}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
