/*
Working with JSX HTML we need to use className instead of just class and we also need to use camelCase while writing HTML element properties i.e onClick NOT onclick

Apply a class of myDiv to the div provided in the JSX code.
const JSX = (
  <div>
    <h1>Add a class to this div</h1>
  </div>
);
*/

const JSX = (
    <div className = "myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );