/*
In React inline styling, unless we provide a units to the size or any other css properties to the values React by default consider it in the Pixels px.

And if we've a larg styling properties to the JSX element then, we can set these to the Object and then assign that object to the style attribute.

If you have a large set of styles, you can assign a style object to a constant to keep your code organized. Declare your styles constant as a global variable at the top of the file. Initialize styles constant and assign an object with three style properties and their values to it. Give the div a color of purple, a font-size of 40, and a border of 2px solid purple. Then set the style attribute equal to the styles constant.
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // Change code above this line
  }
};
*/

const styles = {
    color: "purple",
    fontSize: "40",
    border: '2px solid purple',
    }
  // Change code above this line
  class Colorful extends React.Component {
    render() {
      // Change code below this line
      return (
        <div style={styles}>Style Me!</div>
      );
      // Change code above this line
    }
  };