/*
In class component, we access props by using 'this' keyword.

Render an instance of the Welcome component in the parent component App. Here, give Welcome a prop of name and assign it a value of a string. Within the child, Welcome, access the name prop within the strong tags.

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            /* Change code below this line 
            <Welcome />
            /* Change code above this line 
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          /* Change code below this line 
          <p>Hello, <strong></strong>!</p>
          /* Change code above this line  
        </div>
    );
  }
};
*/

class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name = {"Zeshan"}/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };

