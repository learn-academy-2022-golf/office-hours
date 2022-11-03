// Consider this variable:
const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.


// Where you start (let i = 0)
// Where you end (i < nums.length)
// How to get from start to end (i++)
let currentHighestNumber = nums[0]
for(let i = 0; i < nums.length; i++) {
  console.log(i)
  if(nums[i] > currentHighestNumber) {
    currentHighestNumber = nums[i]
  }
}

console.log(currentHighestNumber)


// Current Value = nums[i]
// Current Index = i


// for(let i = 5; i < 16; i++) {
//   console.log(i)
// }