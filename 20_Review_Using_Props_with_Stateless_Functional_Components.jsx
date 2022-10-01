/*
Even if we don't send the props to the child component we can still use it by declaring a default props.

The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
*/

class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };
  // Change code below this line
  const Camper = (props) => {
    return (
          <p>{props.name}</p>
      );
  }
  Camper.defaultProps = {
    name: 'CamperBot'
  }
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  }