/*
We can use && operator which is the more concise way to achieve if else conditional statement. And by doing this we can avoid code repittions.

Solve the previous example again, so the h1 only renders if display is true, but use the && logical operator instead of an if/else statement.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
  }
};
*/

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      // Change code below this line
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           {this.state.display && <h1>Displayed!</h1>}
         </div>
      );
    }
  };

