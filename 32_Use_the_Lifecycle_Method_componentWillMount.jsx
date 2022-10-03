/*
If we want to perform some thing at some special point in the react component lifecycle then, we can use the react specila methods for this pupose.

The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return <div />
  }
};
*/
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
    console.log("Hi, this is a React lifecycle hook!");
      // Change code above this line
    }
    render() {
      return <div />
    }
  };