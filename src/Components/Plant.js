function Plant({ id, name, category, price, water, light }) {
  const WaterLevel =
    water === 1 ? (
      <p>Cette plante a besoin de beaucoup d'eau</p>
    ) : (
      <p>Cette plante a besoin d'un peu d'eau</p>
    );

  const LightLevel =
    light === 1 ? (
      <p>Cette plante a besoin de beaucoup de lumière</p>
    ) : (
      <p>Cette plante a besoin d'un peu de lumière</p>
    );

  function handleWater({ water, light }) {
    alert("coucou");
  }

  return (
    <li key={id} onClick={() => handleWater}>
      {category}
      {name} : {price} euros
    </li>
  );
}

export default Plant;
