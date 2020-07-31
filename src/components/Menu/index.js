import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a className="LogoLink" href="/">
        <img className="Logo" src={Logo} alt="Emoflix Logo" />
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
