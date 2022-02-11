import "../Styles/banner.css";
import logo from "../Assets/logo.png";

function Banner() {
  const title = "Le jardin de Maud";

  return (
    <div className="div-banner">
      <img src={logo} alt="Logo" className="img-logo" />
      <h1 className="h1-title">{title}</h1>;
    </div>
  );
}
export default Banner;
