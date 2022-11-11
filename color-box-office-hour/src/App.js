import React, {useState} from "react"
import Box from "./components/Box"

// declaration of the functional component
const App = () => {
  // data needed for the component (such as functions and state variables
  // variable to track the values in array
  const [box, setBox] = useState([])

  // create a function that will add a new value to the array every time a button is clicked
  const handleClick = () => {
    setBox(
      [...box, box.length + 1]
    )
  }

  // create a function that will remove an existing value from the array every time a button is clicked
  const removeBox = () => {
    setBox(
      box.slice(0, box.length - 1)
    )
  }

// what you want to display on the screen. Button will trigger the function. Boxes will display to represent the amount of values in the mapped array.
  return(
    <>
      <button onClick={handleClick}>Make box</button>
      <button onClick={removeBox}>Remove a box</button>
      {box.map((value, index) => {
        return(
          <div key={index}>
            <Box />
          </div>
        )
      })}
    </>
  )
}

// allows this component to be seen by other components
export default App
