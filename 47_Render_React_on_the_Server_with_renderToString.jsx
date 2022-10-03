/*
We know that the JavaScript's framework "NodeJS" runs on the server side and so we can render the react component on the server side using 'renderToString()'.



The renderToString() method is provided on ReactDOMServer, which is available here as a global object. The method takes one argument which is a React element. Use this to render App to a string.

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
*/

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div/>
    }
  };
  
  // Change code below this line
  ReactDOMServer.renderToString(<App />);
  