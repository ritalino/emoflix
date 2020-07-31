import React from "react";
import { FooterBase, Logo } from "./styles";
import EmoflixLogo from "../../assets/img/LogoWhite.png";

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <Logo src={EmoflixLogo} alt="Logo Emoflix" />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
