import "../Styles/cart.css";
import plantList from "../Data/plantList.js";
import Plant from "./Plant.js";

function Cart() {
  let total = 0;
  for (let plant of plantList) {
    total += plant.price;
  }

  return (
    <div className="div-cart">
      <h2 className="h2-cart">Panier</h2>
      <ul className="ul-cart">
        {plantList.map(({ id, name, category, price, water, light }) => (
          <Plant
            id={id}
            name={name}
            category={category}
            price={price}
            water={water}
            light={light}
          />
        ))}
      </ul>
      Total : {total} euros
    </div>
  );
}

export default Cart;
