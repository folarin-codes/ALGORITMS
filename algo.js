// Compares two array and returns true if there exist similare elements
 
let arr1 = ['a', 'b', 'd', 'f', 'j'];
let arr2 = ['i', 'k', 'g', 'a']


const checkArr = (b, j) => {
      for (let i = 0; i < b.length; i++){
      
            if (j.includes(b[i])) {
                  return true
            }
      }

return false;
      
}

checkArr(arr1, arr2);



// squares the digit of a string


function squaresDigits(num) {

      try {      
 
     let num2 = num.split(' ')
     let numArr = []

      for (el of num2) {
            numArr.push(el*el)
      }

      let finalNumArr = numArr.join('');
      let result = parseInt(finalNumArr);

            return result
      }
      
      catch (error) {
            console.log('enter a valid number')
      }

}



squaresDigits('2454647')

//ALGORITHMS TO CHECK THE SUM OF NUMBER IN AN ARRAY

/*
Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17 

*/

let digitArr = [2, 4, 6, 8, 9]


function checkSumOfArr(arr, sum){
      for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < arr.length; j++){
                  if (arr[i] + arr[j] === sum) {
                        return true
                  }
            } 
      }

      return false

};


checkSumOfArr

/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

let numArr = [2, 3, 4, 5, 6]

function returnArrayOfSum(arr) {
      let newArr =[]

      arr.forEach((cur, index) => {
            numArr.push(cur * cur)
            
      })
      
}

returnArrayOfSum(numArr)
