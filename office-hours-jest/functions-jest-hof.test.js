
// console.log("streetlamp".toUpperCase())
// console.log("streetlamp".slice(1, 3))

// Prompt: Create a function that takes in an array of strings and returns an array with all the string capitalized.

// describe("myFunction", () => {
//   it("description of function intent", () => {
//     expect(myFunction()).toEqual(expectedOutput)
//   })
// })

// Input: ["tacos", "burritos", "pizza", "enchiladas", "chimichangas"]
// Output: ["Tacos", "Burritos", "Pizza", "Enchiladas", "Chimichangas"]

// Input: [1, 2, 3, 4 ,5]
// Output: "That is not a valid data type.  Please pass an array of strings to me"

describe("capitalizer", () => {
  it("returns an array with all the strings capitalized.", () => {
    let foodInput = ["tacos", "burritos", "pizza", "enchiladas", "chimichangas"]
    let foodOutput = ["Tacos", "Burritos", "Pizza", "Enchiladas", "Chimichangas"]
    let numberInput = [1, 2, 3, 4 ,5]
    let numberOutput = "That is not a valid data type.  Please pass an array of strings to me"
    let mixedInput = [1, 2, "3", 4 ,"hello"]
    let mixedOutput = ["3", "Hello"]
    expect(capitalizer(foodInput)).toEqual(foodOutput)
    expect(capitalizer(mixedInput)).toEqual(mixedOutput)
    expect(capitalizer(numberInput)).toEqual(numberOutput)
    //     ^invoke function    ^ argument
  })
})


// Argument - data thats passed into a function when invoked or called on
// Parameter - placeholder name while inside a function

// ReferenceError: capitalizer is not defined

// capitalizer(["tacos", "burritos", "pizza", "enchiladas", "chimichangas"]) === ["Tacos", "Burritos", "Pizza", "Enchiladas", "Chimichangas"]

// Pseudocode: 
// Create a function called capitalizer
// One parameter of an array
// Since toUpperCase is a string method
    // Iterate on array to access each string (map)
        // Create a conditional to check for typeof and make sure currentValue is a string
            // If currentValue is a string
                // Take the 0 index of string and run .toUpperCase
                // Slice at index 1 and use string interpolation to join back to modified 0 index letter
            // Else
                // Throw the error "That is not a valid data type.  Please pass an array of strings to me"
// return result

// const capitalizer = (array) => {
// //                    ^ parameter
//   return array.map(currentValue => {
//     if(typeof currentValue === "string") {
//       return `${currentValue[0].toUpperCase()}${currentValue.slice(1)}`
//     } else {
//       return "That is not a valid data type.  Please pass an array of strings to me"
//     }
//   })
// }


// filter over array and return only strings using typeof
// map over to modify strings
// if array is empty - return "That is not a valid data type.  Please pass an array of strings to me"

const capitalizer = (array) => {
  let filterArray = array.filter(currentValue => typeof currentValue === "string")
  // console.log(filterArray)
  if(filterArray.length > 0) {
    return filterArray.map(filteredCurrentValue => {
      // console.log(filteredCurrentValue)
      return filteredCurrentValue[0].toUpperCase().concat(filteredCurrentValue.slice(1))
    })
  } else {
    return "That is not a valid data type.  Please pass an array of strings to me"
  }
}

