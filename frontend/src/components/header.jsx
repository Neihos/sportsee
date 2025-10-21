import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "../styles/components/Header.scss";

export default function Header() {
  return (
    <header className="siteHeader">
      <img src={logo} alt="logo du site SportSee" />
      <ul className="siteHeader__navBar">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/profil">Profil</Link>
        </li>
        <li>
          <Link to="/">Réglage</Link>
        </li>
        <li>
          <Link to="/">Communauté</Link>
        </li>
      </ul>
    </header>
  );
}
