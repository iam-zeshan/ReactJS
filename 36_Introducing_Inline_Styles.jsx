/*
Apart from the complex problems, we can set an inline styling to the react component's element, with just a few changes, we would assign JavaScript Object and then use a Camel case for the CSS styling.
Because of Transpiled, what I meant by a transpiled is that JSX compiled language into the JavaScript that's why use different syntax and the camelCase.

Add a style attribute to the div in the code editor to give the text a color of red and font size of 72px.

Note that you can optionally set the font size to be a number, omitting the units px, or write it as 72px.

class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};
*/
class Colorful extends React.Component {
    render() {
      return (
        <div style = {{fontSize: '72px', color: "red"}}>Big Red</div>
      );
    }
  };