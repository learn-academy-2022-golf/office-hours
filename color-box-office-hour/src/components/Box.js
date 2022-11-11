// imports
import React, {useState} from "react"
import "../App.css"

// functional component declaration
const Box = () => {

  // data that needs to be passed in the component
  // track the name of the colors
  const [colorName, setColorName] = useState("white")
  // array that stores a collection of colors as strings
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
  // function that will produce a random number to be used for the index in the bracket notation and uses set function to change the value for the colorName variable
  const colorSelector = () => {
    const randomNum = Math.floor(Math.random() * colors.length)
    setColorName(colors[randomNum])
  }

  // data that will be displayed on the screen
  return (
    <>
      <div 
        className="color-box"
        onClick={colorSelector}
        style={{backgroundColor: colorName}}
      >
      </div>
    </>
  )
}

// export
export default Box