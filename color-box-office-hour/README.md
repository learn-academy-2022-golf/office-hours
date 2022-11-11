Challenge: Color Box
As a developer, you are tasked with creating a color box application. The application will allow the user to click a box and see a different color with every click.

## Setup
- cd into the appropriate repository
- Create a new branch: state-initials1-initials2 
- Create a new React application with no spaces: yarn create react-app state-student1-student2 
- cd into the project
- Start the server for react: $ yarn start
- Open the project in a text editor
- Create a directory in src called components
- Code!


📚 User Stories
- As a user, I can see a square box on the screen with a black border and a white background
  - Create a functional component in App.js
  - Import App.css
  - Create a class using border attributes to make box
  ```javascript
  // App.js
  // imports
  import React from "react"
  import "./App.css"

  // declaration of the functional component
  const App = () => {

    // what you want to display on the screen
    return(
      <>
        <div className="color-box">
        </div>
      </>
    )
  }

  // allows this component to be seen by other components
  export default App
  ```
  <!-- App.css -->
  ```css
  .color-box {
    border: 2px solid black;
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
  ```

As a user, I can see the default color name "white" inside the box
- import useState hook to store and update the state of the color name
- instead of hard-coding or writing static data, 
    ```bash 
      <div className="color-box"> 
        white
      </div>
    ```
    we will dynamically reference the name of the color `{colorName}`
```javascript
// import useState
import React, {useState} from "react"
import "./App.css"

const App = () => {

  // data that you need for your component (functions, variables)
  const [colorName, setColorName] = useState("white")

  // JSX will be used to reference the current state of the variable colorName
  return(
    <>
      <div className="color-box">
        {colorName}
      </div>
    </>
  )
}

export default App
```

As a user, every time I click on the box the name of a different color appears
Possible color names: red, orange, yellow, green, blue, purple, pink
- use an array to store colors as strings
- create a custom function to change the value of the colorName variable
  - use Math.random to produce a number that will be used to select the index of the different colors in the array
  - use the set() to change the state of the value being displayed
- onClick attribute to trigger the function (function invocation) when clicking the box
```javascript
  // stored values in an array as strings
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
  // custom function that uses the random number produced by the Math.random() to abstract a value from the colors array
  const colorSelector = () => {
    const randomNum = Math.floor(Math.random() * colors.length)
    // set() will change the value stored in the colorName value to match the values that is abstracted from the colors array using bracket notation
    setColorName(colors[randomNum])
  }

  // Indentation is an important aspect of web development. Mostly for readability. The div tag has been split into separate lines with its attributes nested inside.
  // onClick attribute added to invoke the colorSelector function
  return (
    <>
      <div 
        className="color-box"
        onClick={colorSelector}
      >
        {colorName}
      </div>
```

As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
- css inline styling, backgroundColor
```javascript
  // style attribute allows inline styling. The value of the background is dynamically referenced as the colorName value
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
```

As a user, I can see many boxes on the page all acting independently of one another.
- place data in a different component
- import that component on App.js
- component call within the return

```javascript
// Box.js
import React, {useState} from "react"
import "../App.css"

const Box = () => {
  const [colorName, setColorName] = useState("white")

  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

  const colorSelector = () => {
    const randomNum = Math.floor(Math.random() * colors.length)
    setColorName(colors[randomNum])
  }

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

export default Box

// App.js
// imports
import React from "react"
import Box from "./components/Box"

// declaration of the functional component
const App = () => {

  // what you want to display on the screen
  return(
    <>
      <Box />
      <Box />
      <Box />
    </>
  )
}

// allows this component to be seen by other components
export default App
```

🏔 Stretch Goals
As a user, I can start with no boxes on the screen
- remove component calls
```javascript
// App.js
  return(
    <>
    </>
  )
```

As a user, I can see a button to add a box
As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes
- onClick to create boxes
- use spread operator to copy the current state and then replace with random color
```javascript
// App.js
// useState variable to create an array with its current state as empty
  const [box, setBox] = useState([])

  // create a function that will add a new value to the array every time a button to clicked
  const handleClick = () => {
    // The set function will have two parameters. 1) The current array: The values in array are copied using the spread operator. 2) The new value: This value to add to the array is separated from the spread operation using a comma. 
    // syntax is set([...array, new value to add to array]) 
    // NOTE: the datatype of the new value is not important. It is being used just to change the length of the array.
    setBox(
      [...box, box.length + 1]
    )
    // If you would like to see the current state of the array before a value is added 
    // console.log(box)
  }

// within the return, a button using the onClick attribute will trigger the function that adds a value to the array. Then a map function will be used to iterate across the array causing a box to be displayed, which will represent each value in the array.
  return(
    <>
      <button onClick={handleClick}>Make box</button>
      {box.map((value) => {
        return(
          <Box/>
        )
      })}
    </>
  )
```

As a user, I can see a button to remove a box
As a user, every time I click the remove button, I can remove the last box in the series
```javascript
  // remove box
  const removeBox = () => {
    // The set function will use the slice method to return a new array with one less value. The syntax is array.slice(start, end)
    setBox(
      box.slice(0, box.length - 1)
    )
    // console.log(box)
  }

  // within the return, a button using the onClick attribute will trigger the function that removes a value from the array. Then a map function will be used to iterate across the array causing a box to be removed, which will represent each value in the array.
  return(
    <>
      <button onClick={handleClick}>Make box</button>
      <button onClick={removeBox}>Remove a box</button>
      {box.map((value) => {
        return(
          <Box/>
        )
      })}
    </>
  )
```

## Warning about the unique key for React
```bash
  Warning: Each child in a list should have a unique "key" prop.

  Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
      at div
      at App (http://localhost:3000/main.1c2249c3e6ee5baea120.hot-update.js:33:72)
```

The index associated with the array will be passed through the map function and then use as the unique key.
``` javascript
      {box.map((value, index) => {
        return(
          <div key={index}>
            <Box />
          </div>
        )
      })}
```
## Pushing changes to Remote Repo (github)
- NOTE: The react app was created at the project level which is a repo used to store all the files needed for the react app. There is a folder `.gitignore` which helps store node modules and other code snippets. You want to ensure you cd back to the repo level that will store this application on github. Before running any git commands, ensure you are on the repo that matches the challenge repo for the class. In this case, it will be the react challenges repo.
- cd out to the github repo: $ cd ..
- $ git status
- NOTE: If you are at the repo level, you should see the folder with the name of your react app repo. `state-student1-student2/`
If you are on the project level, you will see `./` on the untracked files. 
- $ git add `state-student1-student2/`
- $ git commit -m "completed stretch color box challenge"
- $ git push origin `state-initials1-initials2`
- Create pull request
- when pull request is approved, merge and delete the branch on github

## Removing stale branches from local repo
- NOTE: perform these steps after merging and deleting branch on gitHub
- $ git checkout main
- $ git pull origin main
- $ git branch -d `state-initials1-initials2`