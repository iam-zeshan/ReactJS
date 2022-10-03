/*
In React the most awesome thing is that it obtains on state and the state can be passed in unidirection/one way. and we can pass a state single property to the it's child component. and render it there. And it is very easy to pass state as props to the child component.


The MyApp component is stateful and renders a Navbar component as a child. Pass the name property in its state down to the child component, then show the name in the h1 tag that's part of the Navbar render method. name should appear after the text Hello, my name is:.

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line }
         <Navbar />
         {/* Change code above this line }
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line}
      <h1>Hello, my name is: </h1>
      {/* Change code above this line}
    </div>
    );
  }
};
*/

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Zeshan Haider'
      }
    }
    render() {
      return (
         <div>
           {/* Change code below this line */}
           <Navbar name = {this.state.name}/>
           {/* Change code above this line */}
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
      );
    }
  };