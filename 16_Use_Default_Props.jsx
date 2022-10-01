/*
In case if don't send any props to the child component then, we can set it to default props.


The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0.

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
*/

const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps = {items: 0};