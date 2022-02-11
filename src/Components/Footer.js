import { useState } from "react";
import "../Styles/footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }

  return (
    <footer className="footer">
      <div className="div-footer">Inscrivez-vous à la newsletter !</div>
      <div className="div-footer">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
