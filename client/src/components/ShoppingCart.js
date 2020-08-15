import React from "react";

/********* DO NOT DO ANYTHING IN THIS COMPONENT *********/

export default function ShoppingCart(props) {
  const total = props.cart.reduce((sum, d) => sum + d.price, 0);
  return (
    <div className="cart">
      {props.cart.map((plant) => (
        <div className="plant-card" key={plant.id}>
          <img className="plant-image" src={plant.img} alt={plant.name} />
          <div className={ props.darkMode ? "dark-mode plant-details" : "plant-details"}>
            <h2 className={ props.darkMode ? "dark-mode plant-name" : "plant-name"}>{plant.name}</h2>
            <p>${plant.price}</p>
            <button
              className="plant-button"
              onClick={() => props.removeFromCart(plant)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="checkout-section">
        <p className="total">Total: ${total}</p>
        <button
          className="checkout"
          onClick={() => props.history.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
